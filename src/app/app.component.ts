import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shyam1';
  constructor(private router: Router) {
  }
  recipelist(){
   this.router.navigateByUrl('recipes/recipelist');
   
   
 }
  
 recipesingle(){
  this.router.navigateByUrl('recipes/recipesingle');
 }
 recipeindex(){
  this.router.navigateByUrl('recipes/recipeindex');
 }
 bloglist(){
  this.router.navigateByUrl('blog/bloglist');

 }
 blogsingle(){
   this.router.navigateByUrl('blog/blogsingle');
 }
 archive(){
   this.router.navigateByUrl('blog/archive');
 }
 eventlist(){
   this.router.navigateByUrl('events/eventlist');
 }
 eventsingle(){
   this.router.navigateByUrl('events/eventsingle');
 }
}
