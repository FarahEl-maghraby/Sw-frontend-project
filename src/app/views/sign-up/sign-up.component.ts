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
  invalidNationalID:boolean = false
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
      this.errorFunction(httpError)
   
    })
  }
   else if(this.driverInfo === true){
    this.authService.signUpDrivers(credentails).subscribe((res)=>{
      this.drivers = res
    },(httpError)=>{
     this.errorFunction(httpError)
    })
 
   }
  }

  errorFunction(httpError:any){
    console.log(httpError)
    if(httpError.error){
      if(httpError.error.code === 11000) {
        this.invalidUserName = true
      }
      else if(httpError.error.errors.mobilenumber){
        this.invalidMobileNumber = true
        this.invalidMobileMsg = httpError.error.errors.mobilenumber.message
      }
      else if (httpError.error.errors.nationalId){
        this.invalidNationalID = true
      }
     
    }
    
  }

  changeMobile(){
    this.invalidMobileNumber= false
  }

  changeUserName(){
    this.invalidUserName = false
  }

  changeNationalID(){
   this.invalidNationalID = false
  }
  
  

  ngOnInit(): void {
  }

}
