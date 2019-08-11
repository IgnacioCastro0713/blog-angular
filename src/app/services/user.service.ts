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

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = global.url;
  }

  register(user: User): Observable<any> {
    return this._http.post(this.url.concat('auth/register'), user);
  }
}
