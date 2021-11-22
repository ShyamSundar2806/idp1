import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicedemoService {
name=''
msg1:any;
 msg2:any;
 msg3=''
 color="red";
  constructor() { }
  dblogic(myname1:any){
     console.log("h1"+myname1)
    this.name=myname1
  }
  // error(){
  //   this.msg1="Please Enter Name";
  //   this.msg2="Please Enter Password";
  //   this.msg3=this.msg1
  //  console.log(this.msg3)
  // }

}
