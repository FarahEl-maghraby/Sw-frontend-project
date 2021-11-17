import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-request-ride',
  templateUrl: './request-ride.component.html',
  styleUrls: ['./request-ride.component.css']
})
export class RequestRideComponent implements OnInit {

  constructor(private countriesService:CountriesService,private router:Router,private userService:UserService) { }

   Countries:any = this.countriesService.cities
 
   requestRide(credentials:any){
     console.log('asas')
    this.userService.requestRide(credentials).subscribe(()=>{
      this.router.navigate(['/profile'])
    })
   }
  ngOnInit(): void {
    
  }

}
