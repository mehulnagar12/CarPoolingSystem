import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './auth-guard.service';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { RiderComponent } from './rider/rider.component';
import { SignupRiderComponent } from './signup-rider/signup-rider.component';
import { AuthGuardRiderService } from './rider/auth-guard-rider.service';
import { RegisterRideDetailComponent } from './register-ride-detail/register-ride-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterRiderComponent } from './register-rider/register-rider.component';
import { SearchDeleteRiderComponent } from './search-delete-rider/search-delete-rider.component';
import { DisplayRidesComponent } from './display-rides/display-rides.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RiderProfileComponent } from './rider-profile/rider-profile.component';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';
import { DisplayReviewsComponent } from './display-reviews/display-reviews.component';


const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"signup" , component:SignupComponent},
  {path:"signupRider" , component:SignupRiderComponent},
  {path:"home" , component:HomeComponent},
  {path:"adminLogin" , component:LoginComponent},
  {path:"riderLogin" , component:RiderComponent},
  {path:"riderProfile" , component:RiderProfileComponent, canActivate:[AuthGuardRiderService]},
  {path:"userLogin" , component:LoginUserComponent},
  {path:"userProfile" , component:UserProfileComponent},
  {path:"displayRides" , component:DisplayRidesComponent},
  {path:"yourHome" , component:UserComponent , canActivate:[AuthGuardService]},
  {path:"register" , component:RegisterComponent, canActivate: [AuthGuardService] },
  {path:"search" , component:SearchDeleteComponent , canActivate: [AuthGuardService]},
  {path:"registerRider" , component:RegisterRiderComponent , canActivate:[AuthGuardService]},
  {path:"searchRider" , component:SearchDeleteRiderComponent , canActivate:[AuthGuardService]},
  {path:'payment' , component:PaymentComponent , canActivate:[AuthGuardService]},
  {path: 'onlinePayment' , component: OnlinePaymentComponent , canActivate:[AuthGuardRiderService]},
  {path:"offerRide" , component:RegisterRideDetailComponent , canActivate:[AuthGuardRiderService]},
  {path:"payment" , component:PaymentComponent , canActivate:[AuthGuardService]},
  {path:"reviews" , component:CustomerReviewsComponent},
  {path:"displayReviews" , component:DisplayReviewsComponent , canActivate:[AuthGuardService]},
  {path: 'logout', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
