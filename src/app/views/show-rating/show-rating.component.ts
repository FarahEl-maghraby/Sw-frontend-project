import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drivers } from 'src/app/interfaces/driversModel';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-show-rating',
  templateUrl: './show-rating.component.html',
  styleUrls: ['./show-rating.component.css']
})
export class ShowRatingComponent implements OnInit {
  
  drivers:Drivers[] = []

  constructor(private driversService:DriversService) { }
  
  getSingleDriver(){
    this.driversService.getDriverRates().subscribe((res)=>{
      this.drivers = res
    })
  }
  ngOnInit(): void {
    this.getSingleDriver()
  }

}
