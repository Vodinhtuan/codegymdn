import { Injectable } from '@angular/core';
import {Customer} from "../../model/customer/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../../model/facility/facility";
@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  url="http://localhost:4200/facility";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.url);
  }

  addFacility(event: any): Observable<any> {
    return this.httpClient.post(this.url, event);
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Customer>(`${this.url}/${id}`);
  }

  updateById(value: Facility) {
    return this.httpClient.put<Facility>(`${this.url}/${value.id}`, value);
  }

  deleteById(id: number): Observable<Facility> {
    return this.httpClient.delete(`${this.url}/${id}`)
  }
}
