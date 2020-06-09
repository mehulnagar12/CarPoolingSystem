import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  users: any;
  email: string;
  
  constructor(private http:HttpClient) { }

  public doRegistration(user){
    return this.http.post("http://localhost:8080/admin/addUser",user,{responseType:'text' as 'json'});
  }

  public getAll(){
    return this.http.get("http://localhost:8080/admin/getAllUsers");
  }

  public getByEmail(email){
    return this.http.get("http://localhost:8080/admin/findUser/" + email);
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:8080/admin/deleteUser/"+id);
  }

  public updateUser(id){
    return this.http.put("http://localhost:8080/admin/update/"+id,{responseType:'json'});
  }
  public getReviews(){
    return this.http.get("http://localhost:8080/admin/getReviews");
  }
}
