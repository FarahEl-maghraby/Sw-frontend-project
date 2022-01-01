import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Rides } from 'src/app/interfaces/ridesModel';
import { RidesService } from 'src/app/services/rides.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-rides',
  templateUrl: './view-rides.component.html',
  styleUrls: ['./view-rides.component.css']
})
export class DriverRidesComponent implements OnInit,OnDestroy {
// realte to driver get rides wihch matches driver fav areas

// requestsssss
  rides:Rides[] = []
  subscription: any;
  everytwoSeconds: Observable<number> = timer(0, 2000);
  constructor(private rideService:RidesService) { }

  
  getRides(){
    this.rideService.getRides().subscribe((res)=>{
      console.log(res)
      this.rides = res
   
     
    },(error)=>{

    })
  }

  ngOnInit() {
    this.subscription = this.everytwoSeconds.subscribe(() => {
       this.getRides()
     });
   }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // ngOnInit(): void {
  //   this.getDrivers()

  // }

}

