import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RideRegistrationService {

  rideDetails: any;
  origin:string;
  destination:string;

  constructor(private http:HttpClient) { }

  public addRides(rideDetail){
    return this.http.post("http://localhost:8080/riders/addRideDetails",rideDetail,{responseType:'text' as 'json'});
  }

  public getAll(){
    return this.http.get("http://localhost:8080/riders/getRider");
  }

  
}
