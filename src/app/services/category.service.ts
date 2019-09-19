import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Category } from '../models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string = environment.base_url;

  constructor(private http: HttpClient) { }

  storeCategory(category: Category): Observable<any> {
    return this.http.post(`${this.url}category/`, category);
  }
}
