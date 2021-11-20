import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  users:any
  token:any
  role:any
  invalidLogin:boolean = false
  submit(credentails:any){
    this.authService.loginUsers(credentails).subscribe((res)=>{
      this.users = res
      this.token = this.users.token
      this.role = this.users.user.roles
      localStorage.setItem('token',this.token)
      localStorage.setItem('role',this.role)
      this.router.navigate(['/profile'])
    },(httpError)=>{
      if(httpError){
        this.invalidLogin = true
      }
    })
  }
  invalidLoginFun(){
    this.invalidLogin= false
  }

  ngOnInit(): void {
  }

}
