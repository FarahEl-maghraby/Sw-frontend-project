import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rides } from 'src/app/interfaces/ridesModel';
import { RidesService } from 'src/app/services/rides.service';
@Component({
  selector: 'app-user-rides',
  templateUrl: './user-rides.component.html',
  styleUrls: ['./user-rides.component.css']
})
export class UserRidesComponent implements OnInit {

  rides:Rides[] = []
  constructor(private rideService:RidesService,private router:Router) { }

  
  getDrivers(){
    this.rideService.getUserRides().subscribe((res)=>{
      this.rides = res
      console.log(this.rides)
    },(error)=>{
      console.log(error)
    })
  }

  accept(data:any,ride:any){
    this.rideService.acceptRide(data,ride).subscribe((res)=>{
      console.log(res)
    })
  }

  reject(data:any,ride:any){
    this.rideService.rejectRide(data,ride).subscribe((res)=>{
      // refresh in angular
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['userRides']);
    });
    })
  
  }
  ngOnInit(): void {
    this.getDrivers()

  }

}
