import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }
  
  public sendHistory(history){
    return this.http.post("http://localhost:8080/users/history",history,{responseType:'text' as 'json'});
  }

  public getHistory(){
    return this.http.get("http://localhost:8080/users/getHistory")
  }

  public cancelEmail(cancelMail){
    return this.http.post("http://localhost:8080/users/sendCancelEmail",cancelMail,{responseType:'text' as 'json'})
  }

  public updateUser(user){
    return this.http.put("http://localhost:8080/users/update",user,{responseType:'text' as 'json'})
  }

  public getUsers(username){
    return this.http.get("http://localhost:8080/users/list/" + username)
  }

  public sendRiderHistory(rHistory){
    return this.http.post("http://localhost:8080/users/RiderHistory",rHistory,{responseType:'text' as 'json'});
  }

  public getRiderHistory(){
    return this.http.get("http://localhost:8080/riders/getRiderHistory")
  }

  public cancelRiderEmail(cancelMail){
    return this.http.post("http://localhost:8080/riders/sendCancelEmail",cancelMail,{responseType:'text' as 'json'})
  }
}
