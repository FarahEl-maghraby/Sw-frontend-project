import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';
import { DriversService } from 'src/app/services/drivers.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-fav-driver-areas',
  templateUrl: './fav-driver-areas.component.html',
  styleUrls: ['./fav-driver-areas.component.css']
})
export class FavDriverAreasComponent implements OnInit {

  constructor(private countriesService:CountriesService, private driversService:DriversService,private router:Router) { }
 
  Countries:any = this.countriesService.cities
  favDriverAreas(data:any){
    this.driversService.favDriverAreas(data).subscribe(()=>{
      this.router.navigate(['/driverProfile'])
    })
  }
  ngOnInit(): void {
  }

}
