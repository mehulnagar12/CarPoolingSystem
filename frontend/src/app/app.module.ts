import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { FilterEmailPipe } from './search-delete/filter-email.pipe';
import { LoginUserComponent } from './login-user/login-user.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { RiderComponent } from './rider/rider.component';
import { SignupRiderComponent } from './signup-rider/signup-rider.component';
import { RegisterRideDetailComponent } from './register-ride-detail/register-ride-detail.component';
//import { RiderHttpInterceptorService } from './rider-http-interceptor.service';
import { DisplayRidesComponent } from './display-rides/display-rides.component';
import { OriginFilterPipe } from './user/origin-filter.pipe';
import { PaymentComponent } from './payment/payment.component';
import { AgmCoreModule } from '@agm/core';
import { SearchDeleteRiderComponent } from './search-delete-rider/search-delete-rider.component';
import { RegisterRiderComponent } from './register-rider/register-rider.component';
import {NgxAutoScrollModule} from "ngx-auto-scroll";
import { SearchFilterPipe } from './display-rides/search-filter.pipe';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RiderProfileComponent } from './rider-profile/rider-profile.component';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';
import { DisplayReviewsComponent } from './display-reviews/display-reviews.component';

//import { UserHttpInterceptorService } from './user-http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    SearchDeleteComponent,
    FilterEmailPipe,
    LoginUserComponent,
    UserComponent,
    SignupComponent,
    RiderComponent,
    SignupRiderComponent,
    RegisterRideDetailComponent,
    DisplayRidesComponent,
    OriginFilterPipe,
    PaymentComponent,
    SearchDeleteRiderComponent,
    RegisterRiderComponent,
    SearchFilterPipe,
    UserProfileComponent,
    RiderProfileComponent,
    OnlinePaymentComponent,
    CustomerReviewsComponent,
    DisplayReviewsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxAutoScrollModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
