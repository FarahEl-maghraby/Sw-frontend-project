import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:Users = {}
  showVerifiedDrivers:boolean = true
  showDrivers:boolean = false
  constructor(private userService:UserService) { }

  
  getProfile(){
    this.userService.getProfile().subscribe((res)=>{
      this.user = res
      if(this.user.roles === 'admin'){
        this.showVerifiedDrivers = false
        this.showDrivers = true
        this.userService.getAllDrivers().subscribe(()=>{}) 
     } 
     else {
      this.showVerifiedDrivers = true
      this.showDrivers = false
      this.userService.getVerifiedDrivers().subscribe(()=>{}) 
     }
    },(error)=>{
  
      })
   
  }
  ngOnInit(): void {
    this.getProfile()

  }

}
