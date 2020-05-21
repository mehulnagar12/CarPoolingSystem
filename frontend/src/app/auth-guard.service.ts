import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './login/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router,
              private authenticationService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currUser = this.authenticationService.isUserLoggedIn();
    if(currUser){
      return true;
    }
    this.router.navigate(['/home'], {queryParams:{returnUrl:state.url}});
    return false;
  }
}
