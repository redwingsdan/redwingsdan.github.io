import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TravelBlogComponent } from './travel-blog.component';
import { TravelBlogRoutes } from './travel-blog.routes';

@NgModule({
  declarations: [
    TravelBlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(TravelBlogRoutes)
  ],
  providers: []
})
export class TravelBlogModule { }
