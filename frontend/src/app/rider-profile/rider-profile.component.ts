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

  riders: any;
  dispName: any;
  historyRiders: any;
  len: any
  emails: Email = new Email("", "")
  cancelMessage: any
  updateMessage: any;
  openform: boolean;

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

    let resp2 = this.recieve.getRiders(this.service.getLoggedInUserName());
      resp2.subscribe((data) => this.riders = data)
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

  editInfo(rider_id:number,username,password){
    this.riders.username = username;
    this.riders.password = password;
    //var temp_id = this.usersListRider.user_id;
    console.log("ID: " + rider_id)
    let resp = this.recieve.updateRider(rider_id,this.riders);
    resp.subscribe((data) => this.riders = data);
    this.updateMessage = "Updated..!"
  }

  onClickOpenForm(){
    this.openform=true;  
    return this.openform;
    }
}
