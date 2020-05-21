import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplayRideService {

  rideDetails: any;
  origin:string;
  destination:string;

  riderDetails: any;

  constructor(private http:HttpClient) { }

  public getAllRiders(){
    return this.http.get("http://localhost:8080/users/getRiderDetails")
  }

  public getRiderById(rider_id){
    return this.http.get("http://localhost:8080/users/getRider/" + rider_id)
  }

  public getAllRides(){
    return this.http.get("http://localhost:8080/users/getRideDetails");
  }

  public searchAllRides(){
    return this.http.get("http://localhost:8080/getRideDetails");
  }

  public getByOrigin(origin){
    return this.http.get("http://localhost:8080/users/getRideDetailsO/" + origin);
  }

  public getByDestination(destination){
    return this.http.get("http://localhost:8080/users/getRideDetailsD/" + destination);
  }
}
