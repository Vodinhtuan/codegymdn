import { Injectable } from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionaries: IWord[] = [
    {id: 1, english: 'hello', vietnamese: 'xin chao'},
    {id: 2, english: 'table', vietnamese: 'cai ban'},
    {id: 3, english: 'chicken', vietnamese: 'con ga'},
    {id: 4, english: 'house', vietnamese: 'ngoi nha'}
  ]

  constructor() { }

  getAll(){
    return this.dictionaries;
  }
  findById(id: number){
    return this.dictionaries.find(word =>  word.id === id);
  }

}
