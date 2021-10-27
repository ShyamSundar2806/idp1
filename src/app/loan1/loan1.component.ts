import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan1',
  templateUrl: './loan1.component.html',
  styleUrls: ['./loan1.component.css']
})
export class Loan1Component implements OnInit {

  principle:any;
  month:any;
  rate:any;
  rateOfIntrest=5;

  constructor() { }

  
 select(myval1:any){   
           
        this.rateOfIntrest=myval1;  
          
      }  
  cal(principle:any,month:any,rate:any)
  {    
    this.principle=principle;  
      this.month=month;  
      this.rate=rate; 
       var a=this.principle*this.month*this.rate;  
       var b=a/100;   
      console.log(b) 
     }


  ngOnInit(): void {
  }

}
