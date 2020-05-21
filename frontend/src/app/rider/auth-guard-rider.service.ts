import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthRiderService } from './auth-rider.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardRiderService implements CanActivate{

  constructor(private router: Router,
    private authenticationRiderService: AuthRiderService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const currUser = this.authenticationRiderService.isUserLoggedIn();
      if(currUser){
        return true;
      }
      this.router.navigate(['/home'], {queryParams:{returnUrl:state.url}});
      return false;
    }
}
