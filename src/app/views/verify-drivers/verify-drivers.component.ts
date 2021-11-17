import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drivers } from 'src/app/interfaces/driversModel';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-verify-drivers',
  templateUrl: './verify-drivers.component.html',
  styleUrls: ['./verify-drivers.component.css']
})
export class VerifyDriversComponent implements OnInit {

  constructor(private adminService:AdminService,private route:ActivatedRoute,private router:Router) { }

  drivers: Drivers = {}
  id:string = this.route.snapshot.params.id
  getSingleDriver(){
    this.adminService.getSingleDriverAdmin(this.id).subscribe((res)=>{
      console.log(res)
      this.drivers = res
    })
  }
  verify(driver:Drivers){
    this.adminService.verifyDrivers(this.id,driver).subscribe(()=>{
      this.router.navigate(['/alldrivers'])
    })
  }

  ngOnInit(): void {
    this.getSingleDriver()
  }

}

