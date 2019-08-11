/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {
  }

  register(user: User): Observable<any> {
    return this._http.post(global.url.concat('auth/register'), user);
  }
}
