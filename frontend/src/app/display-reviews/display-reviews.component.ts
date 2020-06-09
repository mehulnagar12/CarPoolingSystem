import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../register/user-registration.service';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-display-reviews',
  templateUrl: './display-reviews.component.html',
  styleUrls: ['./display-reviews.component.css']
})
export class DisplayReviewsComponent implements OnInit {

  reviews:any
  constructor(private service:UserRegistrationService,
              private router: Router,
              private authenticationService:AuthService) { }

  ngOnInit(): void {
    let resp = this.service.getReviews();
    resp.subscribe((data)=>this.reviews=data)
  }

  handleLogout(){
    this.authenticationService.logout();
    this.router.navigate(['adminLogin'])
  }

  public navigateToRegister(){
    this.router.navigate(['register']);
  }
}
