import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rides } from '../interfaces/ridesModel';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  baseUrl = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  // Rides

  // get user rides
  getUserRides(){
    return this.http.get<Rides[]>(this.baseUrl+'userRides')
  }

    // get rides of driver
    getRides(){
      return this.http.get<Rides[]>(this.baseUrl+'rides')
    }

    getSinRide(id:any){
      return this.http.get<Rides>(this.baseUrl+'rides/'+id)
    }


    updatePrice(id:any,data:any){
      return this.http.patch(this.baseUrl+'rides/'+id,data)
    }

    acceptRide(id:any,data:any){
      return this.http.patch(this.baseUrl+'userAcceptRides/'+id,data)
    }

    rejectRide(id:any,data:any){
      return this.http.patch(this.baseUrl+'userRidesReject/'+id,data)
    }

    // new requirment 
    getDriverRides(){
      return this.http.get(this.baseUrl+'driverRides')
    }

}
