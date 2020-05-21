import { Component, OnInit } from '@angular/core';
import { AuthSignupRiderService } from '../signup-rider/auth-signup-rider.service';
import { Router } from '@angular/router';
import { Rider } from '../riders';
import { AuthRiderRegisterService } from '../register-rider/auth-rider-register.service';

@Component({
  selector: 'app-search-delete-rider',
  templateUrl: './search-delete-rider.component.html',
  styleUrls: ['./search-delete-rider.component.css']
})
export class SearchDeleteRiderComponent implements OnInit {

  message: any;
  riders: any;
  email: string;

  constructor(private service: AuthRiderRegisterService,
              private router: Router) { }

  ngOnInit(): void {
    let resp = this.service.getAllRider();
    resp.subscribe((data)=>this.riders=data); 
  }

  public deleteRider(rider_id:number){
    let resp = this.service.deleteRider(rider_id);
    resp.subscribe((data)=>this.riders=data);
  }

  public navigateToRegister(){
    this.router.navigate(['registerRider']);
  }

  public navigateToHome(){
    this.router.navigate(['adminLogin']);
  }

}
