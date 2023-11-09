import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8081'; 
  getAll(id:string)
  {
    const url=`${this.baseUrl}/getEmailByID/${id}`
   return  this.http.get<Feedback[]>(url)
  }

  postReview(data:any)
  {
    const url=`${this.baseUrl}/postReview`
   return  this.http.post(url,data)
  }
}
interface Feedback{
   id:string,
  feedback: string,
  rating:number
 }