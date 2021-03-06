/* tslint:disable:variable-name */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _identity;
  private _token;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(environment.base_url.concat('auth/register'), user);
  }

  login(user): Observable<any> {
    return this.http.post(environment.base_url.concat('auth/login'), user);
  }

  logout(): Observable<any> {
    const response = this.http.post(environment.base_url.concat('auth/logout'), {});
    this._identity = null;
    this._token = null;
    return response;
  }

  get identity(): User | null {
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity && identity !== 'undefined') {
      return this._identity = new User(identity);
    }
    return this._identity = null;
  }

  get token() {
    const token = localStorage.getItem('token');
    if (token && token !== 'undefined') {
      return this._token = token;
    }
    return this._token = null;
  }
}
