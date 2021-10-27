import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipesingleComponent } from './recipes/recipesingle/recipesingle.component';
import { RecipeindexComponent } from './recipes/recipeindex/recipeindex.component';
import { BlogComponent } from './blog/blog.component';
import { BloglistComponent } from './blog/bloglist/bloglist.component';
import { BlogsingleComponent } from './blog/blogsingle/blogsingle.component';
import { EventsComponent } from './events/events.component';
import { EventlistComponent } from './events/eventlist/eventlist.component';
import { EventsingleComponent } from './events/eventsingle/eventsingle.component';
import { ArchiveComponent } from './blog/archive/archive.component';
import { RegisterComponent } from './register/register.component';
import { Loan1Component } from './loan1/loan1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    ErrorComponent,
    RecipesComponent,
    RecipelistComponent,
    RecipesingleComponent,
    RecipeindexComponent,
    BlogComponent,
    BloglistComponent,
    BlogsingleComponent,
    EventsComponent,
    EventlistComponent,
    EventsingleComponent,
    ArchiveComponent,
    RegisterComponent,
    Loan1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
