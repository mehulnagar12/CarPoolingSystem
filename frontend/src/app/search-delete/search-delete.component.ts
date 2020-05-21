import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../register/user-registration.service';
import { Router } from '@angular/router';
import { User } from '../users';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
  users: any
  email: string="";


  constructor(private service:UserRegistrationService,
              private router: Router){}

  public deleteUser(id:number){
    let resp = this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
  }

  public findUserByEmailId(email){
    let resp = this.service.getByEmail(email);
    resp.subscribe((data)=>this.users=data);
  }

  ngOnInit() {
    let resp = this.service.getAll();
    resp.subscribe((data)=>this.users=data);
  }

  public navigateToRegister(){
    this.router.navigate(['register']);
  }

  public navigateToHome(){
    this.router.navigate(['home']);
  }

  public updateList(id:number){
    let resp = this.service.updateUser(id)
    resp.subscribe((data)=>this.users=data)
  }
}
