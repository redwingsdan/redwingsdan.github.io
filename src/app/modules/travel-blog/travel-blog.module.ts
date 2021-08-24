import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TravelBlogComponent } from './travel-blog.component';
import { TravelBlogRoutes } from './travel-blog.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TravelBlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TravelBlogRoutes)
  ],
  providers: []
})
export class TravelBlogModule { }
