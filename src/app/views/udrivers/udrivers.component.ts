import { Component, OnInit } from '@angular/core';
import { Drivers } from 'src/app/interfaces/driversModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-udrivers',
  templateUrl: './udrivers.component.html',
  styleUrls: ['./udrivers.component.css']
})
export class UdriversComponent implements OnInit {

  drivers:Drivers[] = []
  constructor(private userService:UserService) { }

  
  getVerifiedDrivers(){
    this.userService.getVerifiedDrivers().subscribe((res)=>{
      this.drivers = res
     
    },(error)=>{
     
    })
  }
  ngOnInit(): void {
    this.getVerifiedDrivers()

  }

}