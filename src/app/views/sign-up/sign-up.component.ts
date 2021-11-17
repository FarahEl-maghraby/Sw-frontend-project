import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  driverInfo:boolean = false
  userInfo:boolean = true
  invalidMobileNumber:boolean = false
  invalidUserName:boolean = false
  invalidMobileMsg:string = ''
  users:any
  drivers:any
  token:any
  role:any
  constructor(private authService:AuthService,private router:Router) { }

  driverSelected(){
    this.driverInfo = true
    this.userInfo = false
  }

  userSelected(){
    this.driverInfo = false
    this.userInfo = true
  }

  signUp(credentails:any){
    if(this.userInfo === true)
   { 
     this.authService.signUpUsers(credentails).subscribe((res)=>{
      this.users = res
      this.token = this.users.token
      this.role = this.users.roles
      localStorage.setItem('token',this.token)
      localStorage.setItem('role',this.role)
      this.router.navigate(['/profile'])
    },(httpError)=>{
      console.log(httpError)
      this.errorFunction(httpError)
   
    })
  }
   else if(this.driverInfo === true){
     console.log('dsfdsfd')
    this.authService.signUpDrivers(credentails).subscribe((res)=>{
      this.drivers = res
    },(httpError)=>{
      console.log('test')
     this.errorFunction(httpError)
    })
 
   }
  }

  errorFunction(httpError:any){
    console.log(httpError)
    console.log('test1')
    if(httpError.error.code === 11000){
      this.invalidUserName = true
    }
   else if(httpError.error.errors.mobilenumber){
     console.log('sajakjsakjs')
      this.invalidMobileNumber = true
      this.invalidMobileMsg = httpError.error.errors.mobilenumber.message
      console.log(this.invalidMobileMsg)
    }
  }

  invalidLoginFun(){
    this.invalidMobileNumber= false
    this.invalidUserName = false
  }
  
  

  ngOnInit(): void {
  }

}
