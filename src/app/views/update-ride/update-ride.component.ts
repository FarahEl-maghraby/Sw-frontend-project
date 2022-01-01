import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rides } from 'src/app/interfaces/ridesModel';
import { RidesService } from 'src/app/services/rides.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-ride',
  templateUrl: './update-ride.component.html',
  styleUrls: ['./update-ride.component.css']
})
export class UpdateRideComponent implements OnInit {

  ride: Rides ={}
  constructor(private rideService: RidesService, private route:ActivatedRoute ,private router: Router) { }
  
  getSinRide(): void{

    const id: string = this.route.snapshot.params.id;
    this.rideService.getSinRide(id).subscribe((res)=> this.ride = res);
  }

  updatePrice(ride:Rides){
    const id = this.route.snapshot.params.id;
    this.rideService.updatePrice(id, ride).subscribe((res)=> {
       this.ride = res 
    });
    this.router.navigate(['/driverProfile'])
}

  ngOnInit(): void {
    this.getSinRide()
  }

}
