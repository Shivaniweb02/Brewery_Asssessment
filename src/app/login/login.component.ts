import { Component } from '@angular/core';
import { UserService } from '../UserService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private userService:UserService,private route: Router){}
UserData={
  email:'',
  password:''
}
login()
{
  this.userService.login(this.UserData.email,this.UserData.password).subscribe(response=>{
    if (response!=null) {
      // If login is successful, navigate to the search page
      alert("Logged In!!!")
      // this.userService.setUserData=response;
      this.route.navigate(['/search'], { state: { data: this.UserData } });
    } else {
      console.log('User not found');
    }
  },error=>
    {
console.error(error);

  })
}


}
