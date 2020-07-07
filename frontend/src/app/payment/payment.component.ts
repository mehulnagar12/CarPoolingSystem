import { Component, OnInit, AfterViewInit, ViewChild, Input, ElementRef } from '@angular/core';
import { EmailServiceService } from './email-service.service';
import { Router } from '@angular/router';
import { Email } from '../email';
import { AuthUserService } from '../login-user/auth-user.service';
import { UserComponent } from '../user/user.component';
import { NgxAutoScroll } from 'ngx-auto-scroll';
import { TransferService } from '../user/transfer.service';
import { Subscription } from 'rxjs';
import { HistoryService } from '../user/history.service';
import { HistoryRider } from '../HistoryRider';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  emails: Email = new Email("","","");
  message:any;
  message2: "Choose the payment option";
  payMessage:any;
  isLoggedIn = false;
  price: "50";
  checkVariable: boolean=false;
  checkPaymentVariable: boolean=false;
  @Input() ValueFromComponent1:string;
  @ViewChild(NgxAutoScroll) ngxAutoScroll: NgxAutoScroll;
  subscription: Subscription;
  msg: any = [];
  riderEmail:string
  

  constructor(private service: EmailServiceService,
              private router: Router,
              private authenticationUserService: AuthUserService,
              private recieve: TransferService,
              private history: HistoryService) { }
              
  
  ngOnInit(): void {
    this.isLoggedIn = this.authenticationUserService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);

    let resp = this.recieve.sendData().subscribe((data)=>{
      this.msg.push(data);
      this.riderEmail = data.Email
      this.emails.riderId = this.riderEmail
      console.log(this.riderEmail)
    });    
  }

  public sendEmail(){
    let resp = this.service.sendMail(this.emails);
    this.emails.infoRider = this.authenticationUserService.isUserLoggedIn() + " " +  this.emails.emailId
    console.log(this.emails)
    resp.subscribe((data)=>{
      if(data!=null){
        this.message = "Email Sent!!"
      }
      console.log(data)});
    this.emails.info = this.emails.info + " Price to be paid: " + this.price + "\n";
    console.log(this.emails)
    this.checkPaymentVariable=true;
    console.log(resp);
    
  }
/*
  public getEstimate(){
    this.emails.info = this.emails.info + " Price to be paid: " + this.price + "\n";
    console.log(this.emails)
  }*/

  public payCod(){
    this.payMessage = "COD selected";
    this.emails.info = this.emails.info + " Price to be paid: " + this.price + "\n";
    console.log(this.emails)
  }

  public payOnline(){
    this.emails.info = this.emails.info + " Price paid: " + this.price + "\n";
    console.log(this.emails)
    this.router.navigate(['/onlinePayment'])
  }

  GetChildData(data){
    this.emails.info= this.emails.info + data;
    console.log(this.emails)
  }

  GetConfirmation(check){
    this.checkVariable = check;
    console.log(check);
  }

}
