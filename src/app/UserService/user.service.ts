import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
//  UserData=[]
 
  constructor(private http:HttpClient) {

    
   }
  private baseUrl = 'http://localhost:8081'; 


  register(data:any){
    const url=`${this.baseUrl}/register`;
    return this.http.post(url,data);

  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password });
  }
}
