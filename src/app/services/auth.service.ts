import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseUrl = 'http://localhost:3000/'
constructor(private http:HttpClient) { }

signUpUsers(credentials:any){
  return this.http.post(this.baseUrl+'users',credentials)
}

signUpDrivers(credentials:any){
  return this.http.post(this.baseUrl+'drivers',credentials)
}

loginUsers(credentials:any){
  return this.http.post(this.baseUrl+'users/login',credentials)
}

loginDrivers(credentials:any){
  return this.http.post(this.baseUrl+'drivers/login',credentials)
}

logoutUsers()
{
  return this.http.delete(this.baseUrl+'userlogout')
}

logoutDrivers()
{
  return this.http.delete(this.baseUrl+'driverlogout')
}
getToekn(){
  return localStorage.getItem('token')
}
}