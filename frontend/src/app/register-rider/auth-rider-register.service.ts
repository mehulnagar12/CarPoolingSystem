import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthRiderRegisterService {

  rider: any;

  constructor(private http: HttpClient) { }

  public getAllRider(){
    return this.http.get("http://localhost:8080/admin/displayRider");
  }

  public riderRegistration(rider){
    return this.http.post("http://localhost:8080/admin/registerRider",rider,{responseType:'text' as 'json'});
  }

  public deleteRider(rider_id){
    return this.http.delete("http://localhost:8080/admin/deleteRider/"+rider_id);
  }
}
