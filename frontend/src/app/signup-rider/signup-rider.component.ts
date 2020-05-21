import { Component, OnInit } from '@angular/core';
import { Rider } from '../riders';
import { AuthSignupRiderService } from './auth-signup-rider.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup-rider',
  templateUrl: './signup-rider.component.html',
  styleUrls: ['./signup-rider.component.css']
})
export class SignupRiderComponent implements OnInit {

  rider: Rider = new Rider("","","","","","","","","");
  message: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: AuthSignupRiderService) { }

  ngOnInit(): void {
  }

  public RidersignUp(){
    let resp = this.service.doRiderSignup(this.rider);
    resp.subscribe((data)=>this.message=data);
  }
  
  public navigateToHome(){
    this.router.navigate(['home']);
  }

  public navigateToLogin(){
    this.router.navigate(['userLogin']);
  }

}
