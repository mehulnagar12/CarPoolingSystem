import { Injectable, SkipSelf } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './login/auth.service';
import { Observable } from 'rxjs';
import { AuthRiderService } from './rider/auth-rider.service';
import { AuthUserService } from './login-user/auth-user.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private authenticationService: AuthService,
        private authenticationServiceU: AuthUserService,
        private authenticationServiceR: AuthRiderService,
        private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var checkReq = req.url.toString()
        if (checkReq.includes("http://localhost:8080/admin")) {
            if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
                const authReq = req.clone({
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${window.btoa(this.authenticationService.username + ":" + this.authenticationService.password)}`
                    })
                });
                return next.handle(authReq)
            } else {
                return next.handle(req);
            }
        } else if (checkReq.includes("http://localhost:8080/users")) {
            if (this.authenticationServiceU.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
                const authReq = req.clone({
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${window.btoa(this.authenticationServiceU.username + ":" + this.authenticationServiceU.password)}`
                    })
                });
                return next.handle(authReq)
            } else {
                return next.handle(req);
            }
        }
        else if (checkReq.includes("http://localhost:8080/riders")) {
            if (this.authenticationServiceR.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
                const authReq = req.clone({
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${window.btoa(this.authenticationServiceR.username + ":" + this.authenticationServiceR.password)}`
                    })
                });
                return next.handle(authReq)
            } else {
                return next.handle(req);
            }
        }
        else {
            if (this.authenticationServiceR.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
                const authReq = req.clone({
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${window.btoa(this.authenticationServiceR.username + ":" + this.authenticationServiceR.password)}`,
                        'Access-Control-Allow-Origin': '*'
                    })
                });
                return next.handle(authReq)
            } else {
                return next.handle(req);
            }
        }
    }
}