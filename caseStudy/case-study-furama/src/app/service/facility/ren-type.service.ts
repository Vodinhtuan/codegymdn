import { Injectable } from '@angular/core';
import {RentType} from "../../model/facility/rent-type";

@Injectable({
  providedIn: 'root'
})
export class RenTypeService {
  renTypes : RentType[] = [];
  constructor() {
    this.renTypes.push({id:1,name:'Year'})
    this.renTypes.push({id:2,name:'Moon'})
    this.renTypes.push({id:3,name:'Day'})
    this.renTypes.push({id:4,name:'Hour'})
  }
  findALl(): RentType[]{
    return this.renTypes;
  }
}
