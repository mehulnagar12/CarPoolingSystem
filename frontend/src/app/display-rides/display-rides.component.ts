import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from '../login-user/auth-user.service';
import { DisplayRideService } from './display-ride.service';
import { RideDetails } from '../RideDetails';

@Component({
  selector: 'app-display-rides',
  templateUrl: './display-rides.component.html',
  styleUrls: ['./display-rides.component.css']
})
export class DisplayRidesComponent implements OnInit {

  isLoggedIn = false;
  message: any;
  rideDetails: any;
  riderDetails: any;
  selectedRideDetail: RideDetails;
  origin:string;
  destination:string;
  date:any;

  constructor(private router: Router,
              private authenticationService:AuthUserService,
              private service: DisplayRideService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu-> ' + this.isLoggedIn);

    let resp = this.service.searchAllRides();
    resp.subscribe((data)=>this.rideDetails=data);
  }

  handleUserLogout(){
    this.authenticationService.logout();

    let resp = this.service.searchAllRides();
    resp.subscribe((data)=>this.rideDetails=data);
  }  

  onSelect(rideDetail:RideDetails){
    this.selectedRideDetail = rideDetail;
    this.router.navigate(['/userLogin'])
  }


}
