import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url: string = environment.base_url;

  constructor(private http: HttpClient) {}

  storeCategory(category: Category): Observable<any> {
    return this.http.post(`${this.url}category/`, category);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http
      .get<any>(`${this.url}category/`)
      .pipe(map(response => response.data.map(item => new Category(item))));
  }
}
