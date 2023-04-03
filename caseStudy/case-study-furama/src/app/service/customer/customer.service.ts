import { Injectable } from '@angular/core';
import {Customer} from "../../model/customer/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url="http://localhost:4200/customer";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url);
  }

  addCustomer(event: any): Observable<any> {
    return this.httpClient.post(this.url, event);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.url}/${id}`);
  }

  updateById(value: Customer) {
    return this.httpClient.put<Customer>(`${this.url}/${value.id}`, value);
  }

  deleteById(id: number): Observable<Customer> {
    return this.httpClient.delete(`${this.url}/${id}`)
  }
}
