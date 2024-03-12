import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService  {
  constructor(private http: HttpClient) {}


  all(page?: number) {
    return this.http.get(`${environment.api}/product?page=${page}`);
  }

  categoryFilter(id?: number, page?: number) {
    return this.http.get(`${environment.api}/product?page=${page}&category=${id}`);
  }

  public search(term?: string, page?: number) {
    return this.http.get(`${environment.api}/product?page=${page}&search=${term}`);

  }

  get(id: number) {
    return this.http.get(`${environment.api}/product/${id}`);
  }
}
