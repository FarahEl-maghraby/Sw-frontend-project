import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drivers } from '../interfaces/driversModel';
import { Users } from '../interfaces/userModel';
import { Rides } from '../interfaces/ridesModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }
  // Users get their own profile
  getProfile(){
    return this.http.get<Users>(this.baseUrl+'profile')
  }

  // users get Verified Drivers

  getVerifiedDrivers(){
    return this.http.get<Drivers[]>(this.baseUrl+'drivers')
  }

   // add rate for each driver by user

   getSingleDriver(id:any){
    return this.http.get<Drivers>(this.baseUrl+'udriver/'+id)
  }

  updateDrivers(id:any,driver:Drivers){
    return this.http.patch(this.baseUrl+'udriver/'+id,driver)
  }

  requestRide(credentials:any){
    return this.http.post(this.baseUrl+'rides',credentials)
  }
  

  ///////////////////////////////////////////////////////////////////////////////

  // admin

  // get all drivers admin

  getAllDrivers(){
    return this.http.get<Drivers[]>(this.baseUrl+'allDrivers')
  }

  // VerifyDrivers by admin
  verifyDrivers(id:any,driver:Drivers){
    return this.http.patch(this.baseUrl+'verifydriver/'+id,driver)
  }

  // Admin gettung all single drivers

  getSingleDriverAdmin(id:any){
    return this.http.get<Drivers>(this.baseUrl+'driver/'+id)
  }

  // get all users for admin
  getAllUsers(){
    return this.http.get<Users[]>(this.baseUrl+'users')
  }

  // Delete User
  deleteUser(id:any){
    return this.http.delete(this.baseUrl+'users/'+id)
  }

  // Delete Driver
  deleteDriver(id:any){
    return this.http.delete(this.baseUrl+'driver/'+id)
  }

  ////////////////////////////////////////////////////////////////////////////////

}
