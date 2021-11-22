import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicedemoService } from '../servicedemo.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg1:any;
  msg2:any;
  color="red";
  constructor(private router:Router,private a:ServicedemoService) { }
  
  register(name:string,Password:any){

    let variable:string | null=localStorage.getItem(name);
     if(variable==null){
       
      this.msg1="Please Correct Name";
      this.msg2="Please Correct Password";
          return
  }

    let ob:any=JSON.parse(variable);


    // this.myname=  localStorage.getItem("Username");
  
    // this.mypass=  localStorage.getItem("Password");
  
  
  
      if((ob.name==name)&&(ob.pass==Password) )
      {
  
  
  
        this.router.navigateByUrl('loan1');
  
  
  
      }
  
    }
    servname='';
    abc(){
    this.servname=this.a.name;
    }
    

  ngOnInit(): void {
  }

}
