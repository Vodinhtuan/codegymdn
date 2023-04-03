import { Injectable } from '@angular/core';
import {CustomerType} from "../../model/customer/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypes : CustomerType[] = []

  constructor() {
    this.customerTypes.push({id: 1, name: 'Diamond'})
    this.customerTypes.push({id: 2, name: 'Platinum'})
    this.customerTypes.push({id: 3, name: 'gold'})
    this.customerTypes.push({id: 4, name: 'Silver'})
    this.customerTypes.push({id: 5, name: 'Member'})
  }
  getAll(): CustomerType[] {
    return this.customerTypes;
  }
}
