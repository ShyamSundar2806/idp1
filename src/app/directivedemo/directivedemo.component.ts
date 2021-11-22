import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent implements OnInit {

  constructor() { }
display:boolean=true;
display1:boolean=false;

fruits=["Apple","Banana","Chikku","GreenApple"]
 

switch1=0; 
myval=0;
xyz(val:any){
  this.switch1=val; 
 

}
// error1:boolean=false;
// error2:boolean=false;
// valid:boolean=false;
// color="red";
// color1="green";
validate(name:any){
  console.log(name)
  // if(name.length<=2 && name.length>=1){
  //   this.error1=true;
  //   this.error2=false;
  //   this.valid=false;
  // }
  // else if(name.length==0 || name.length==null){
  //   this.error2=true;
  //   this.valid=false;
  //   this.error1=false;

  // }
  // else{
  //   this.valid=true;
  //   this.error1=false;
  //   this.error2=false;
  // }
  
}
  ngOnInit(): void {
    // for(var i=0;i<this.fruits.length;i++){
    //   console.log(this.fruits[i])
    // }
  }

}
