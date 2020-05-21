import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthRiderService } from './auth-rider.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  dispName: string;

  constructor(private router:Router,
              private route:ActivatedRoute,
              private authenticationRiderService:AuthRiderService) { }

  ngOnInit(): void {
    this.dispName=this.authenticationRiderService.getLoggedInUserName();
  }

  handleRiderLogin(){
    this.authenticationRiderService.authenticationRiderService(this.username, this.password).pipe(first()).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['offerRide']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });     
  }

}
