import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicedemoService {
name=''
  constructor() { }
  dblogic(myname1:any){
     console.log("h1"+myname1)
    this.name=myname1
  }
}
