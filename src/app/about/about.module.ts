import { NgModule } from '@angular/core';
import { AboutComponent } from 'src/app/about/about.component';
import { RouterModule } from '@angular/router';
import { AboutRoutes } from './about.routes';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatChipsModule,
    NgbModule,
    RouterModule.forChild(AboutRoutes)
  ],
  providers: []
})
export class AboutModule { }
