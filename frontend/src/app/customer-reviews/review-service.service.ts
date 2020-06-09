import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {

  constructor(private http:HttpClient) { }

  public submitReview(review){
    return this.http.post("http://localhost:8080/addreview",review,{responseType:'text' as 'json'});
  }
}
