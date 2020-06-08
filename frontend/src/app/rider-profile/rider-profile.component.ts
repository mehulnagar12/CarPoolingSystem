import { Component, OnInit } from '@angular/core';
import { AuthRiderService } from '../rider/auth-rider.service';
import { HistoryService } from '../user/history.service';
import { Email } from '../email';

@Component({
  selector: 'app-rider-profile',
  templateUrl: './rider-profile.component.html',
  styleUrls: ['./rider-profile.component.css']
})
export class RiderProfileComponent implements OnInit {

  dispName: any;
  historyRiders: any;
  len: any
  emails: Email = new Email("", "")
  cancelMessage: any
  constructor(private recieve: HistoryService,
    private service: AuthRiderService) { }

  ngOnInit(): void {
    this.dispName = this.service.getLoggedInUserName()
    let resp = this.recieve.getRiderHistory();
    resp.subscribe((data) => {
      this.historyRiders = data
      this.len = this.historyRiders.length - 1
      this.emails.emailId = this.historyRiders[0].userEmail;
      this.emails.info = this.historyRiders[0].riderName + " has cancelled ride";
    })
  }

  sendCancellationMail(hist,id:number) {
    let resp = this.recieve.cancelRiderEmail(this.emails);
    console.log(this.emails)
    this.cancelMessage = "Ride has been cancelled..!!"
    resp.subscribe((data) => console.log(data))
    const index = this.historyRiders.indexOf(hist);
    this.historyRiders.splice(index, 1);

    this.deleteRide(id);
  }

  deleteRide(id: number) {
    let resp = this.recieve.deleteHistoryRider(id);
    resp.subscribe((data) => this.historyRiders = data);
  }
}
