import { Component, OnInit } from '@angular/core';
import { Rides } from 'src/app/interfaces/ridesModel';
import { RidesService } from 'src/app/services/rides.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-rides',
  templateUrl: './view-rides.component.html',
  styleUrls: ['./view-rides.component.css']
})
export class ViewRidesComponent implements OnInit {
// realte to driver get rides wihch matches driver fav areas
  rides:Rides[] = []
  constructor(private rideService:RidesService) { }

  
  getDrivers(){
    this.rideService.getRides().subscribe((res)=>{
      this.rides = res
      console.log(this.rides)
    },(error)=>{
      console.log(error)
    })
  }
  ngOnInit(): void {
    this.getDrivers()

  }

}

