import { Component, OnInit } from '@angular/core';
import { RideDetails } from '../RideDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthRiderService } from '../rider/auth-rider.service';
import { RideRegistrationService } from './ride-registration.service';

@Component({
  selector: 'app-register-ride-detail',
  templateUrl: './register-ride-detail.component.html',
  styleUrls: ['./register-ride-detail.component.css']
})
export class RegisterRideDetailComponent implements OnInit {

  isLoggedIn = false;
  rideDetail: RideDetails = new RideDetails("","","","",1,"");
  message: any;
  rideDetails: any;
  dispName:string;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private authenticationService:AuthRiderService,
              private service:RideRegistrationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);

    let resp = this.service.getAll();
    console.log(resp);
    resp.subscribe((data)=>this.rideDetails=data);

    this.dispName=this.authenticationService.getLoggedInUserName();

  }

  handleRiderLogout(){
    this.authenticationService.logout();
  }

  public addNow(){
    let resp = this.service.addRides(this.rideDetail);
    resp.subscribe((data)=>this.message=data);
  }
}
