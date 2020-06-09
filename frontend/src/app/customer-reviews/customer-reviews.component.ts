import { Component, OnInit } from '@angular/core';
import { reviews } from '../reviews';
import { ReviewServiceService } from './review-service.service';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css']
})
export class CustomerReviewsComponent implements OnInit {

  review: reviews = new reviews("","","","");
  message: any;

  constructor(private service: ReviewServiceService) { }

  ngOnInit(): void {
  }

  public submitReview(){
    let resp = this.service.submitReview(this.review);
    resp.subscribe((data)=>this.message=data)
  }

}
