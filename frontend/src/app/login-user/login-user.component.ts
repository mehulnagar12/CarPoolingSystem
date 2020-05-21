import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUserService } from './auth-user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationUserService: AuthUserService) { }

  ngOnInit(): void {
  }

  handleUserLogin(){
    this.authenticationUserService.authenticationUserService(this.username, this.password).pipe(first()).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['payment']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });     
  }

  public navigateToHome(){
    this.router.navigate(['home']);
  }

  public navigateToSignUp(){
    this.router.navigate(['signup']);
  }
}
