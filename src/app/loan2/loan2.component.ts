import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan2',
  templateUrl: './loan2.component.html',
  styleUrls: ['./loan2.component.css']
})
export class Loan2Component implements OnInit {
  rateOfIntrest=2
 
  principle:any;

  month:any;

  rate:any;

emi:any;

c:any;
 b:any;

constructor() {}


abc(e:any)
{  
 this.rateOfIntrest=e.target.value;
}

cal(principle:any,month:any,rate:any)

{

    this.principle=principle;

    this.month=month;

    this.rate=rate;

    var a=this.principle*this.month*this.rate;

    this. b=a/100;

    this.c=(principle-this.b)
    this.emi=this.c/month;

    console.log(this.emi)

}
  ngOnInit(): void {
    
  }


}
