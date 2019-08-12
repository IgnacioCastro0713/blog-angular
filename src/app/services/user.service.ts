import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _identity;
  private _token;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(global.url.concat('auth/register'), user);
  }

  login(user): Observable<any> {
    return this.http.post(global.url.concat('auth/login'), user);
  }

  get identity() {
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity && identity != 'undefined')
      return this._identity = identity;
    return this._identity = null;
  }

  get token() {
    let token = localStorage.getItem('token');
    if (token && token != 'undefined')
      return this._token;
    return  this._token = null;
  }

}
