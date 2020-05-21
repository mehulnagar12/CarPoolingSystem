import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http:HttpClient) { }

  savedData:any 
  transferData: any;
  private subject = new ReplaySubject<any>();


  saveData(data){
    this.savedData = JSON.parse(data);
    this.subject.next(this.savedData);
  }

  sendData(): Observable<any>{
    return this.subject.asObservable();
  }
}
