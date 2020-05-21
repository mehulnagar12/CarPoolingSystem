import { Component, OnInit } from '@angular/core';
import { AuthSignupRiderService } from '../signup-rider/auth-signup-rider.service';
import { Router } from '@angular/router';
import { Rider } from '../riders';
import { AuthRiderService } from '../rider/auth-rider.service';
import { AuthRiderRegisterService } from './auth-rider-register.service';

@Component({
  selector: 'app-register-rider',
  templateUrl: './register-rider.component.html',
  styleUrls: ['./register-rider.component.css']
})
export class RegisterRiderComponent implements OnInit {

  rider: Rider = new Rider("","","","","","","","","");
  message: any;
  isLoggedIn = false;
  riders: any;
  email: string;

  constructor(private service: AuthRiderRegisterService,
              private router: Router,
              private authenticationService: AuthRiderService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);

    let resp = this.service.getAllRider();
    console.log(resp);
    resp.subscribe((data)=>this.riders=data);
  }

  handleLogout(){
    this.authenticationService.logout();
    this.router.navigate(['adminLogin'])
  }

  public Register(){
    let resp = this.service.riderRegistration(this.rider);
    resp.subscribe((data)=>this.message=data);
  }

  public navigateToSearch(){
    this.router.navigate(['searchRider']);
  }

  public navigateToUserReg(){
    this.router.navigate(['register']);
  }
}
