import { Component, OnInit } from '@angular/core';
import { Drivers } from 'src/app/interfaces/driversModel';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-driver-profiel',
  templateUrl: './driver-profiel.component.html',
  styleUrls: ['./driver-profiel.component.css']
})
export class DriverProfielComponent implements OnInit {

  driver:Drivers = {}
  showVerifiedDrivers:boolean = true
  showDrivers:boolean = false
  constructor(private deriverService:DriversService) { }

  
  getProfile(){
    this.deriverService.getDriverProfile().subscribe((res)=>{
      console.log(res)
      this.driver = res
  })
}
  ngOnInit(): void {
    this.getProfile()

  }

}



