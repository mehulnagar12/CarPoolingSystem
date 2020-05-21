import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { UserRegistrationService } from './user-registration.service';
import { User } from '../users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoggedIn = false;
  user: User = new User("","","");
  message: any;
  users: any;
  email: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private service:UserRegistrationService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);

    let resp = this.service.getAll();
    console.log(resp);
    resp.subscribe((data)=>this.users=data);
  }

  handleLogout(){
    this.authenticationService.logout();
    this.router.navigate(['adminLogin'])
  }

  public registerNow(){
    let resp = this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
  }
  
  public navigateToSearch(){
    this.router.navigate(['search']);
  }

  public navigateToRiderReg(){
    this.router.navigate(['registerRider']);
  }
}
