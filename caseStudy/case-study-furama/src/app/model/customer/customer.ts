import {CustomerType} from "./customer-type";
export interface Customer {
  id?: number;
  name?: string;
  birthday?: string;
  gender?: string;
  idCard?: string;
  phone?: string;
  email?: string;
  customerType?: CustomerType;
  address?: string;
}
