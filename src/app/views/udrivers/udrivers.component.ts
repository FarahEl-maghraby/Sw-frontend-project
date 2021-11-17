import { Component, OnInit } from '@angular/core';
import { Drivers } from 'src/app/interfaces/driversModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-udrivers',
  templateUrl: './udrivers.component.html',
  styleUrls: ['./udrivers.component.css']
})
export class UdriversComponent implements OnInit {

  users:Drivers[] = []
  constructor(private userService:UserService) { }

  
  getDrivers(){
    this.userService.getVerifiedDrivers().subscribe((res)=>{
      this.users = res
      console.log(this.users)
    },(error)=>{
      console.log(error)
    })
  }
  ngOnInit(): void {
    this.getDrivers()

  }

}