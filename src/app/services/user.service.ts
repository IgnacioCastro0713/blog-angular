import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(global.url.concat('auth/register'), user);
  }

  login(credentials): Observable<any> {
    return this.http.post(global.url.concat('auth/login'), credentials);
  }

}
