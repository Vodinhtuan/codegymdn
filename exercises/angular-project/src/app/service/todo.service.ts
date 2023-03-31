// @ts-ignore
import { Injectable } from "@angular/core";
import {Todo} from "../todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>("http://localhost:3000/todos");
  }
  deleteById(value:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/todos/"+value);
  }
  save(todo:Todo):Observable<any>{
    return this.httpClient.post("http://localhost:3000/todos/",todo);
  }
  update(todo:Todo):Observable<any>{
    return this.httpClient.put("http://localhost:3000/todos/"+todo.id,todo);
  }
  findById(value:number):Observable<Todo>{
    return this.httpClient.get("http://localhost:3000/todos/"+value);
  }
}
