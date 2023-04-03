import { Injectable } from '@angular/core';
import {Employee} from "../../model/employee/employee";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url="http://localhost:4200/employee";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.url);
  }

  addEmployee(event: any): Observable<any> {
    return this.httpClient.post(this.url, event);
  }

  findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.url}/${id}`);
  }

  updateById(value: Employee) {
    return this.httpClient.put<Employee>(`${this.url}/${value.id}`, value);
  }

  deleteById(id: number): Observable<Employee> {
    return this.httpClient.delete(`${this.url}/${id}`)
  }

}
