import { Component, OnInit } from '@angular/core';
import { Rides } from 'src/app/interfaces/ridesModel';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-rides',
  templateUrl: './all-rides.component.html',
  styleUrls: ['./all-rides.component.css']
})
export class AllRidesComponent implements OnInit {

  rides:Rides[] = []
  constructor(private adminService:AdminService) { }

  
  getAllRides(){
    this.adminService.getAllRides().subscribe((res)=>{
      console.log(res)
      this.rides = res
    },(error)=>{
    })
  }

  ngOnInit(): void {
    this.getAllRides()
  }

}
