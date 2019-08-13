import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(private service: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401 && err.error === 'token is expired') {
        this.service.refreshToken().subscribe(res => {
          if (!this.service.token) {
            return request
          }
          localStorage.setItem('token', res.token);
          request = request.clone({setHeaders: {Authorization: `Bearer ${res.token}`}});
          return next.handle(request);
        }, error => {
          if (error) {
            console.log(error);
          }
        });
        return next.handle(request).toPromise().catch(err => err.error);
      }
    }));
  };
}
