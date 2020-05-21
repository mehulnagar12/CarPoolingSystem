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
  status: boolean
  len:any

  constructor(private recieve: HistoryService,
    private router: Router,
    private service: AuthUserService) { }

  ngOnInit(): void {
    this.dispName = this.service.getLoggedInUserName()
    let resp = this.recieve.getHistory();
    resp.subscribe((data) => {
      this.historyUsers = data
      this.len = this.historyUsers.length - 1
      this.emails.emailId = this.historyUsers[this.historyUsers.length - 1].riderEmail;
      this.emails.info = this.historyUsers[this.historyUsers.length - 1].username + " has cancelled ride";
      console.log(this.historyUsers[this.historyUsers.length - 1].dateTime)
    })
  }

  sendCancellationMail(hist) {
      let resp = this.recieve.cancelEmail(this.emails);
      console.log(this.emails)
      this.cancelMessage = "Ride has been cancelled..!!"
      resp.subscribe((data) => console.log(data))
      const index = this.historyUsers.indexOf(hist);
      this.historyUsers.splice(index, 1);
  }
}
