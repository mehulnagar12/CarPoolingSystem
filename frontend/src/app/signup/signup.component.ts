import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { UserRegistrationService } from '../register/user-registration.service';
import { User } from '../users';
import { AuthSignupService } from './auth-signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  
  user: User = new User("","","","","");
  message: any;
  //users: any;
  email: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private service:AuthSignupService) { }

  ngOnInit(): void {
  }

  public signUp(){
    let resp = this.service.doSignUp(this.user);
    resp.subscribe((data)=>this.message=data);
  }
  
  public navigateToHome(){
    this.router.navigate(['home']);
  }

  public navigateToLogin(){
    this.router.navigate(['userLogin']);
  }
}
