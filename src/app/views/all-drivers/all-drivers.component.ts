import { Component, OnInit } from '@angular/core';
import { Drivers } from 'src/app/interfaces/driversModel';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-drivers',
  templateUrl: './all-drivers.component.html',
  styleUrls: ['./all-drivers.component.css']
})
export class AllDriversComponent implements OnInit {
  drivers:Drivers[] = []
  constructor(private adminService:AdminService) { }

  
  getDrivers(){
    this.adminService.getAllDrivers().subscribe((res)=>{
      this.drivers = res
      console.log(this.drivers)
    },(error)=>{
      console.log(error)
    })
  }

  deleteDriver(driver:any){
    this.adminService.deleteDriver(driver._id).subscribe(()=>{
      let index = this.drivers.indexOf(driver)
      this.drivers.splice(index,1)
    })
  }

  ngOnInit(): void {
    this.getDrivers()

  }

}