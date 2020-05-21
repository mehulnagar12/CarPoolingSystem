import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../email';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http: HttpClient) { }


  

  public sendMail(email){
    return this.http.post("http://localhost:8080/users/sendEmail",email,{responseType:'text' as 'json'});
  }
}
