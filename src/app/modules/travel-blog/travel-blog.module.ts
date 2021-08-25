import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TravelBlogComponent } from './travel-blog.component';
import { TravelBlogRoutes } from './travel-blog.routes';
import { CoreModule } from '../../shared/core.module';

@NgModule({
  declarations: [
    TravelBlogComponent
  ],
  imports: [
    CoreModule,
    RouterModule.forChild(TravelBlogRoutes)
  ],
  providers: []
})
export class TravelBlogModule { }
