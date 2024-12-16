import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from './model/menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  addMenu(data:any){
   return this.http.post('http://localhost:3000/menu',data)
  }
  getMenu():Observable<Menu[]>{
    return this.http.get<Menu[]>('http://localhost:3000/menu')
   }
   getMenuById(id:any):Observable<Menu>{
    return this.http.get<Menu>('http://localhost:3000/menu/'+id)
   }
   updateMenu(data:Menu,id:any):Observable<Menu>{
    return this.http.put<Menu>('http://localhost:3000/menu/'+id,data)
   }
}
