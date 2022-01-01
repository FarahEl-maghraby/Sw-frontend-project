import { Component, OnInit } from '@angular/core';
import { Rides } from 'src/app/interfaces/ridesModel';
import { RidesService } from 'src/app/services/rides.service';

@Component({
  selector: 'app-rides-of-driver',
  templateUrl: './rides-of-driver.component.html',
  styleUrls: ['./rides-of-driver.component.css']
})
export class RidesOfDriverComponent implements OnInit {
// show completed ridess of driver
  rides:Rides[] = []
  constructor(private rideService:RidesService) { }

  
  getDriverRides(){
    this.rideService.getDriverRides().subscribe((res:any)=>{
      console.log(res)
      this.rides = res
     
    },(error)=>{

    })
  }

  ngOnInit() {
       this.getDriverRides()
   }
  

}

