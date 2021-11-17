import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drivers } from '../interfaces/driversModel';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  baseUrl = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }
 
// Drivers
  // get Driver profile
  getDriverProfile(){
    return this.http.get<Drivers>(this.baseUrl+'driverprofile')
  }

  // get driver rating only 
  getDriverRates(){
    return this.http.get<Drivers[]>(this.baseUrl+'userRatings')
  }

  favDriverAreas(data:any){
    return this.http.patch(this.baseUrl+'driverprofile',data)
  }

}
