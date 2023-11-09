import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../FeedbackService/feedback.service';
import { UserService } from '../UserService/user.service';
interface Feedback{
   id:string;
  feedback: string;
  rating:number
 }
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  selectedResult: any;
  UserData: any;
  postFeedback={
   
      email:'',
     feedback: '',
     rating:0,
     id:'',
    
  }
  feedback:Feedback[]=[]
  //  reviewID: 2, feedback: 'HI I am in the restraunt', rating: 5,
  constructor(private route: ActivatedRoute,private userService: UserService, private service: FeedbackService) {}
  ngOnInit() {
    this.selectedResult = history.state.data;
    this.UserData=history.state.data;
  this.postFeedback.id=this.selectedResult.id;
  }
 postReview()
 {
  console.log(this.postFeedback);
  
  this.service.postReview(this.postFeedback).subscribe(data=>{
    
    console.log("POSTED")
  })
 }
  getAllReviews(){
    this.service.getAll(this.selectedResult.id).subscribe((data: Feedback[])=>{
      
      this.feedback=data;
      // console.log(data);
      // this.UserData=this.userService.getUserData();
      console.log(this.UserData)
      },
    error => {
      console.error('Error fetching reviews:', error);
      // Handle error scenario here
    }
  );
  }
  
}
