import { Component } from '@angular/core';
import { UserService } from '../UserService/user.service';
import { Router } from '@angular/router';
interface User{
  name:'',
  number:'',
  email:'',
  password:'',
  address:''

}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  inData={
    name:'',
    number:'',
    email:'',
    password:'',
    address:''
  
  }
constructor(private userService:UserService,private route:Router){}

register(){
  this.userService.register(this.inData).subscribe(data=>{
    console.log(data);
    this.route.navigate(['/login']);
  })
}
}
