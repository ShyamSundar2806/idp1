import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicedemoService } from '../servicedemo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mydata="";
  login(Name:any,Password:any,phone:any){   
    localStorage.setItem("Username",Name);    
    localStorage.setItem("Password",Password);   
      localStorage.setItem("Phone",phone);   
     console.log(Name+""+Password)  
   } 
   constructor(private router:Router,private a:ServicedemoService) { }
 
   reg(){
       this.router.navigateByUrl('register');
   }

abc(myname1:any){
 console.log("hi  fsz " +myname1)
  this.a.dblogic(myname1);
}

  
  ngOnInit(): void {
  }

}
