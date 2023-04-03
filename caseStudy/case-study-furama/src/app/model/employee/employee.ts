import {Division} from "./division";
import {Education} from "./education";
import {PositionEmployee} from "./position-employee";

export interface Employee {
  id?: number;
  name?: string;
  birthday?: string;
  idCard?: string;
  salary?: number;
  phone?: string;
  email?: string;
  address?: string;
  position?: PositionEmployee;
  education?: Education;
  division?: Division;
}
