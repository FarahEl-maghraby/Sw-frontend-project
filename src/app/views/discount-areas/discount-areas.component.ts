import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';
import { DiscountService } from 'src/app/services/discount.service';

@Component({
  selector: 'app-discount-areas',
  templateUrl: './discount-areas.component.html',
  styleUrls: ['./discount-areas.component.css']
})
export class DiscountAreasComponent implements OnInit {

  submit:boolean = true
  update:boolean = false
  data:any
  areas:any
  id:any
  constructor(private countriesService:CountriesService, private discountService:DiscountService,private router:Router) { }
 
  Countries:any = this.countriesService.cities
  discountAreass(data:any){
    this.discountService.discountAreas(data).subscribe(()=>{
      this.router.navigate(['/profile'])
    })
  }
  editDiscountAreas(data:any){
    this.discountService.getDiscountAreas().subscribe((res)=>{
      this.data = res
      this.id = this.data[0]._id
      console.log(this.id)
      if(this.data[0].discountAreas){
        this.areas = this.data[0].discountAreas
        this.submit = false
        this.update = true
      }
    })
    this.discountService.editDiscountAreas(data,this.id).subscribe((res)=>{
      this.router.navigate(['/profile'])
    })
  }
  getDiscountsAreas(){
    this.discountService.getDiscountAreas().subscribe((res)=>{
      this.data = res
      if(this.data[0].discountAreas){
        this.areas = this.data[0].discountAreas
        this.submit = false
        this.update = true
      }
    })
  }

  ngOnInit(): void {
    this.getDiscountsAreas()
  }

}
