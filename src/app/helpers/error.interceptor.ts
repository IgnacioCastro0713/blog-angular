import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private service: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.service.logout().subscribe(response => {
          if (response.ok) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.clear();
          }
        }, error => {
          if (error) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          }
        });
        location.reload();
      }

      const error = err.error.message || 401;
      return throwError(error);
    }))
  }
}

export const errorInterceptorProvider = {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true};
