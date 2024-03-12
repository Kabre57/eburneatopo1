import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService  {
  constructor(private http: HttpClient) {}


  all(page?: number) {
    return this.http.get(`${environment.api}/article?page=${page}`);
  }

  categoryFilter(id?: number, page?: number) {
    return this.http.get(`${environment.api}/article?page=${page}&category=${id}`);
  }

  tagFilter(id?: number, page?: number) {
    return this.http.get(`${environment.api}/article?page=${page}&tags=${id}`);
  }

  public search(term?: string, page?: number) {
    return this.http.get(`${environment.api}/article?page=${page}&search=${term}`);

  }

  get(id: number) {
    return this.http.get(`${environment.api}/article/${id}`);
  }
}
