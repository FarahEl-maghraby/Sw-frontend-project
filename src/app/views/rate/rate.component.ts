import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drivers } from 'src/app/interfaces/driversModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor(private userService:UserService,private route:ActivatedRoute,private router:Router) { }
  drivers: Drivers = {}
  id:string = this.route.snapshot.params.id
  driverRate = [1,2,3,4,5]
  getSingleDriver(){
    this.userService.getSingleDriver(this.id).subscribe((res)=>{
      this.drivers = res
    })
  }
  updateDriversRate(driver:Drivers){
    this.userService.updateDriversRate(this.id,driver).subscribe((res)=>{
      this.router.navigate(['/udrivers'])
    })
  }

  ngOnInit(): void {
    this.getSingleDriver()
  }
}
