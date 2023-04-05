import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {consignment} from "../models/consignment";

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000/consignments';
  }

  getAllConsignment(): Observable<consignment[]> {
    return this.httpClient.get<consignment[]>(`${this.url}`)
  }

  addNewConsignment(consignment: consignment): Observable<consignment> {
    return this.httpClient.post(`${this.url}`, consignment);
  }

  deleteById(id: number): Observable<consignment> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  findById(id: number): Observable<consignment> {
    return this.httpClient.get<consignment>(`${this.url}/${id}`);
  }

  updateById(consignment: consignment, id: number): Observable<consignment> {
    return this.httpClient.put<consignment>(`${this.url}/${id}`, consignment);
  }

  findByProductName(productName: string): Observable<consignment[]> {
    return this.httpClient.get<consignment[]>(`${this.url}?product.name_like=${productName}`);
  }

  findByExportDate(exportDate: Date): Observable<consignment[]> {
    const formattedDate = exportDate.toISOString().slice(0, 10); // Chuyển đổi ngày thành chuỗi theo định dạng yyyy-MM-dd
    return this.httpClient.get<consignment[]>(`${this.url}?exportDate=${formattedDate}`);
  }


}
