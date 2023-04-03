import {product} from './product';

export interface consignment {
  id?: string;
  product?: product;
  quantity?: number;
  importDate?: Date;
  MFG?: Date;
  EXP?: Date;
}
