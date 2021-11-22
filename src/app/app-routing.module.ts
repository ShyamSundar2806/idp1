import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArchiveComponent } from './blog/archive/archive.component';
import { BloglistComponent } from './blog/bloglist/bloglist.component';
import { BlogsingleComponent } from './blog/blogsingle/blogsingle.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { ErrorComponent } from './error/error.component';
import { EventlistComponent } from './events/eventlist/eventlist.component';
import { EventsingleComponent } from './events/eventsingle/eventsingle.component';
import { HomeComponent } from './home/home.component';
import { Loan1Component } from './loan1/loan1.component';
import { Loan2Component } from './loan2/loan2.component';
import { LoginComponent } from './login/login.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { RecipeindexComponent } from './recipes/recipeindex/recipeindex.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipesingleComponent } from './recipes/recipesingle/recipesingle.component';
import { RectivedemoComponent } from './rectivedemo/rectivedemo.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent

  },
  {
    path:'loan1',
    component:Loan1Component
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'loan2',
    component:Loan2Component
  },
  
  {
    path:'recipes',
    children:[
      {
        path:'recipelist',
        component:RecipelistComponent
      },
      {
        path:'recipesingle',
        component:RecipesingleComponent
      },
      {
        path:'recipeindex',
        component:RecipeindexComponent
      }
    ]
  },
  {
    path:'events',
    children:[
      {
        path:'eventlist',
        component:EventlistComponent
      },
      {
        path:'eventsingle',
        component:EventsingleComponent
      }
    ]

  },
  {
    path:'blog',
    children:[
      {
        path:'bloglist',
        component:BloglistComponent
      },
      {
        path:'blogsingle',
        component:BlogsingleComponent
      },
      {
        path:'archive',
        component:ArchiveComponent
      },
      {
        path:'directive',
        component:DirectivedemoComponent
      },{
        path:'rective',
        component:RectivedemoComponent
      }
    ]
  },
  {
    path:'pipe',
    component:PipedemoComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'**',
    component:ErrorComponent

  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
