import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class UserManagerService {

  constructor(private http: HttpClient) {}


  getPerson(url: string){
    return this.http.get(url);
  }

 }
 
