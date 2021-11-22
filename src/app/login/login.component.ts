import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicedemoService } from '../servicedemo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 msg1:any;
 msg2:any;
 color="red";
database:any;
database1:any;
mydata=''
 constructor(private router:Router,private a:ServicedemoService) { }
  login(name:any,pass:any)
  {
    
    if(name==""&& pass =="")   
  {
    this.msg1="Please Enter Name";
    this.msg2="Please Enter Password";
    // this.a.error();
     
  } 
  else
  {
  this.database={name,pass}
  this.database1=JSON.stringify(this.database)
  localStorage.setItem(name,this.database1)

    // this.router.navigateByUrl('register')   

  }
   } 
  
 
   reg(){
       this.router.navigateByUrl('register');
   }

abc(myname1:any){
 //console.log("hi  fsz " +myname1)
  this.a.dblogic(myname1);
}

  
  ngOnInit(): void {
  }

}
