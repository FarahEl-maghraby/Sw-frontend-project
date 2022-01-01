import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:any
  role= localStorage.getItem('role')
  constructor(private authService:AuthService,private titleService:Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
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

  get userLoggedin(){
    if(this.role ==='user'|| this.role==='admin'){
      return true
    }
    return false
  }

  get driverLoggedin(){
    if(this.role ==='driver'){
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