import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  constructor() { }
  srt="Hi Good Morning";

  amount="12345678"

  amount1=1500;

  date =new Date();

  person ={"name":"Thanesh","Age":"25"}

  name="manU"
  ngOnInit(): void {
  }

}
