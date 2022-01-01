import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Discounts } from '../interfaces/discountsModel';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  baseUrl = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  discountAreas(body:any){
    return this.http.post(this.baseUrl+'discountsAreas',body)
  }

  //
  getDiscountAreas(){
    return this.http.get<Discounts[]>(this.baseUrl+'discountsAreas')
  }

  editDiscountAreas(body:any,id:any){
    return this.http.patch(this.baseUrl+'discountsAreas/'+id,body)
  }
}
