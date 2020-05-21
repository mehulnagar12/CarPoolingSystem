import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUserService } from '../login-user/auth-user.service';
import { RideRegistrationService } from '../register-ride-detail/ride-registration.service';
import { DisplayRideService } from '../display-rides/display-ride.service';
import { RideDetails } from '../RideDetails';
import { Email } from '../email';
import { TransferService } from './transfer.service';
import { HistoryUser } from '../HistoryUser';
import { HistoryService } from './history.service';
import { DatePipe } from '@angular/common';
import { HistoryRider } from '../HistoryRider';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  rideDetails:any;
  origin:string;
  destination:string;
  date:any;
  isLoggedIn = false;
  riderDetails: any;
  selectedRideDetail: RideDetails;
  dispName:string;
  Message: string;
  outputMessage:any;
  email: Email = new Email("","");
  show_req_join:boolean=false;
  show_confirmation:boolean=false;
  hist: HistoryUser = new HistoryUser("","","","","");
  histData:any;
  usersList: any;
  usersListRider:any;  
  histRider: HistoryRider = new HistoryRider("","","","")
 
  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  @Output() myOutputConfirm: EventEmitter<boolean> = new EventEmitter();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationUserService: AuthUserService,
    private service:DisplayRideService,
    private transfer:TransferService,
    private history: HistoryService) { }


  ngOnInit(): void {
    
    this.dispName = this.authenticationUserService.getLoggedInUserName()

    let resp = this.service.getAllRides();
    resp.subscribe((data)=>this.rideDetails=data);

    let resp1 = this.service.getAllRiders();
    resp1.subscribe((data1)=>this.riderDetails=data1);

    let resp2 = this.history.getUsers(this.authenticationUserService.getLoggedInUserName());
    resp2.subscribe((data)=>this.usersListRider=data)

  }

  public findRideByOrigin(origin){
    let resp = this.service.getByOrigin(origin);
    resp.subscribe((data)=>this.rideDetails=data);
  }

  public findRideByDestination(destination){
    let resp = this.service.getByDestination(destination);
    resp.subscribe((data)=>this.rideDetails=data);
  }

  onSelect(rideDetail:RideDetails){
    this.selectedRideDetail = rideDetail;
    this.show_req_join = !this.show_req_join;
  }

  public reqToJoin(data1:string,data2:string,data3:string,data4:string){
    this.outputMessage = {
        Name:data1,
        Mobile:data2,
        Email:data3
    };
    this.outputMessage = (JSON.stringify(this.outputMessage))
    this.show_confirmation = !this.show_confirmation;
    this.myOutput.emit(this.outputMessage);
    this.myOutputConfirm.emit(this.show_confirmation);
    console.log("PublicData----> " + this.outputMessage); 

    this.hist.username = this.hist.username + this.authenticationUserService.getLoggedInUserName();
    this.hist.riderName = data1.toString();
    this.hist.riderMobile = data2.toString();
    this.hist.riderEmail = data3.toString();
    this.hist.dateTime = (new Date()).toString().substring(0,(this.hist.dateTime.length)-31)
    let resp = this.history.sendHistory(this.hist);
    resp.subscribe((data)=>console.log(data))
    this.transfer.saveData(this.outputMessage);

    console.log(this.usersListRider)
    this.histRider.username = this.usersListRider.username
    this.histRider.userEmail = this.usersListRider.email
    this.histRider.userMobile = this.usersListRider.mobile
    this.histRider.riderName = data4
    console.log(this.histRider)
    let respo = this.history.sendRiderHistory(this.histRider);
    respo.subscribe((data)=>console.log(data))

  }

  handleLogout(){
    this.authenticationUserService.logout();
    this.transfer.saveData(this.outputMessage);
  }

}
