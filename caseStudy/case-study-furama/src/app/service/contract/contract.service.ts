import { Injectable } from '@angular/core';
import {Customer} from "../../model/customer/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../../model/contract/contract";
import {Employee} from "../../model/employee/employee";
@Injectable({
  providedIn: 'root'
})
export class ContractService {
  url="http://localhost:43200/contract";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.url);
  }

  addContract(event: any): Observable<any> {
    return this.httpClient.post(this.url, event);
  }

  findById(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(`${this.url}/${id}`);
  }

  updateById(value: Contract) {
    return this.httpClient.put<Contract>(`${this.url}/${value.id}`, value);
  }

  deleteById(id: number): Observable<Contract> {
    return this.httpClient.delete(`${this.url}/${id}`)
  }


}
