import {RentType} from "./rent-type";
import {FacilityType} from "./facility-type";
export interface Facility {
  id?: number;
  name?: string;
  area?: number;
  cost?: number;
  maxPeople?: number;
  standardRoom?: string;
  descriptionOtherConvenience?: string;
  areaPool?: number;
  numberOfFloors?: number;
  freeService?: string;
  rentType?: RentType;
  facilityType?: FacilityType;
}
