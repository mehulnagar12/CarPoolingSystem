import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../user/transfer.service';
import { HistoryService } from '../user/history.service';
import { Email } from '../email';
import { AuthUserService } from '../login-user/auth-user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  historyUsers: any
  emails: Email = new Email("", "")
  dispName: any
  users: any
  Cancel: string
  cancelMessage: string
  updateMessage: String;
  status: boolean
  len: any
  openform: boolean;

  constructor(private recieve: HistoryService,
    private service: AuthUserService) { }

  ngOnInit(): void {
    this.dispName = this.service.getLoggedInUserName()
    let resp = this.recieve.getHistory();
    resp.subscribe((data) => {
      console.log(data)
      this.historyUsers = data
      //this.len = this.historyUsers.length - 1
      this.emails.emailId = this.historyUsers[0].riderEmail;
      this.emails.info = this.historyUsers[0].username + " has cancelled ride";
      console.log(this.historyUsers[0].dateTime)

      let resp2 = this.recieve.getUsers(this.service.getLoggedInUserName());
      resp2.subscribe((data) => this.users = data)
    })
  }

  sendCancellationMail(hist, id: number) {
    let resp = this.recieve.cancelEmail(this.emails);
    console.log(this.emails)
    this.cancelMessage = "Ride has been cancelled..!!"
    resp.subscribe((data) => console.log(data))
    const index = this.historyUsers.indexOf(hist);
    this.historyUsers.splice(index, 1);

    this.deleteRide(id)
  }

  deleteRide(id: number) {
    let resp = this.recieve.deleteHistoryUser(id);
    resp.subscribe((data) => this.historyUsers = data);
  }
  
  editInfo(id:number,username,password) {
    this.users.username = username;
    this.users.password = password;
    //var temp_id = this.usersListRider.user_id;
    console.log("ID: " + id)
    let resp = this.recieve.updateUser(id,this.users);
    resp.subscribe((data) => this.users = data);
    this.updateMessage = "Updated..!"
  }

  onClickOpenForm(){
    this.openform=true;  
    return this.openform;
    }
}
