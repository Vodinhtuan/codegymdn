import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {product} from '../models/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000/products';
  }

  getAllProduct(): Observable<product[]> {
    return this.httpClient.get<product[]> (this.url);
  }
}
