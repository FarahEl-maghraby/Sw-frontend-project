import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription, timer } from 'rxjs';
import { Rides } from 'src/app/interfaces/ridesModel';
import { RidesService } from 'src/app/services/rides.service';
@Component({
  selector: 'app-user-rides',
  templateUrl: './user-rides.component.html',
  styleUrls: ['./user-rides.component.css']
})
export class UserRidesComponent implements OnInit,OnDestroy {

  rides:Rides[] = []
  subscription: any;
  everytwoSeconds: Observable<number> = timer(0, 2000);
  constructor(private rideService:RidesService,private router:Router) { }
 
  getUserRides(){
    this.rideService.getUserRides().subscribe((res)=>{
      this.rides = res
      console.log(this.rides)
    },(error)=>{
      console.log(error)
    })
  }

  accept(data:any,ride:any){
    this.rideService.acceptRide(data,ride).subscribe((res)=>{
      this.ngOnInit()
       
      console.log(res)
    })
  }

  reject(data:any,ride:any){
    this.rideService.rejectRide(data,ride).subscribe((res)=>{
      this.ngOnInit()

    })
  }


  // every two sec. update data
   ngOnInit() {
    this.subscription = this.everytwoSeconds.subscribe(() => {
       this.getUserRides()
     });
   }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // ngOnInit(): void {
  //   this.getDrivers()

  // }

}
