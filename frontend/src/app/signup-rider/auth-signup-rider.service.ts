import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthSignupRiderService {

  rider: any;

  constructor(private http:HttpClient) { }

  public doRiderSignup(rider){
    return this.http.post("http://localhost:8080/addRider",rider,{responseType:'text' as 'json'});
  }
}
