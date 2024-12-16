import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  addMenu(data:any){
   return this.http.post('http://localhost:3000/menu',data)
  }
}
