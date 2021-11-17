import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:any
  logDriver:boolean = false
  role= localStorage.getItem('role')
  constructor(private authService:AuthService,private userService:UserService) { }

  get isLoggedin(){
    // if token --> false 
    // else --> true
    let token = this.authService.getToekn()
    // token = value
    if(token){
      return true
    }
    return false
  }

  logout(){
  if(this.role === 'admin' || this.role ==='user'){
    this.authService.logoutUsers().subscribe(()=>{})
  }
  else if(this.role ==='driver'){
    this.authService.logoutDrivers().subscribe(()=>{})
  }
  localStorage.removeItem('token')
  localStorage.removeItem('role')
    
    
  }
  ngOnInit(): void {
  }

}