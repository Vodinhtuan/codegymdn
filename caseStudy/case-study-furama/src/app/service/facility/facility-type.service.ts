import { Injectable } from '@angular/core';
import {FacilityType} from "../../model/facility/facility-type";
import {RentType} from "../../model/facility/rent-type";
@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilities : FacilityType[] = [];
  constructor() {
    this.facilities.push({id:1,name:'Villa'})
    this.facilities.push({id:2,name:'House'})
    this.facilities.push({id:3,name:'Room'})

  }
  findALl(): FacilityType[]{
    return this.facilities;
  }
}
