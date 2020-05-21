import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dest: any;
  ori: any;
  @Output() mySearch: EventEmitter<string> = new EventEmitter();


  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  
  public navigateToAvlRides(){

    this.mySearch.emit(this.dest + " " + this.ori);
    this.router.navigate(['displayRides']);
  }
  
}
