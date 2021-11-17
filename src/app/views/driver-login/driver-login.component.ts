import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.css']
})
export class DriverLoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  drivers:any
  token:any
  role:any
  invalidLogin:boolean = false
  invalidDriver:boolean = false
  submit(credentails:any){
    this.authService.loginDrivers(credentails).subscribe((res)=>{
      this.drivers = res
      console.log(this.drivers)
      this.token = this.drivers.token
      this.role = this.drivers.driver.roles
      localStorage.setItem('token',this.token)
      localStorage.setItem('role',this.role)
      this.router.navigate(['/driverProfile'])
      console.log(res)
    },(httpError)=>{
      if(httpError.error === 'eError: Sorry your account has not been verified yet')
     {
       this.invalidLogin = false
       this.invalidDriver = true
     }
     else if(httpError){
        console.log(httpError)
        this.invalidLogin = true
        this.invalidDriver = false
      }
    })
  }
  invalidLoginFun(){
    this.invalidLogin= false
  }

  ngOnInit(): void {
  }

}
