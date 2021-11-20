import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userModel';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users:Users[] = []
  constructor(private adminService:AdminService) { }

  
  getUsers(){
    this.adminService.getAllUsers().subscribe((res)=>{
      this.users = res
    },(error)=>{
    })
  }
  deleteUser(user:any){
    this.adminService.deleteUser(user._id).subscribe(()=>{
      let index = this.users.indexOf(user)
      this.users.splice(index,1)
    })
  }
  ngOnInit(): void {
    this.getUsers()

  }

}