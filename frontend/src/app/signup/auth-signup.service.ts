import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthSignupService {

  users: any;
  
  constructor(private http:HttpClient) { }

  public doSignUp(user){
    return this.http.post("http://localhost:8080/signup",user,{responseType:'text' as 'json'});
  }

}
