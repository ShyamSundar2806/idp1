import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicedemoService } from '../servicedemo.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myname:any;

  mypass:any;
  constructor(private router:Router,private a:ServicedemoService) { }
  
  register(Username:any,Password:any){

 

    this.myname=  localStorage.getItem("Username");
  
    this.mypass=  localStorage.getItem("Password");
  
  
  
      if((this.myname==Username)&&(this.mypass==Password) ){
  
  
  
        this.router.navigateByUrl('loan1');
  
  
  
      }else{
  
        alert("sry")
  
      }
  
    }
    servname='';
    abc(){
    this.servname=this.a.name;
    }
    

  ngOnInit(): void {
  }

}
