import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl='https://localhost:7141/api/User';

  constructor(private http:HttpClient) { }
  getData():Observable<User[]>
  {
    return this.http.get<User[]>(this.apiUrl)
}

registerData(data:any){

  return this.http.post("https://localhost:7141/api/User/register",data)
   
}

loginData(username:string,password:string):Observable<any>{
  return this.http.post("https://localhost:7141/api/User/authenticate",{username,password})
}
}

