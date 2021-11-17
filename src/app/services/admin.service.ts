import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drivers } from '../interfaces/driversModel';
import { Users } from '../interfaces/userModel';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

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