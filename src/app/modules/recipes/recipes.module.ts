import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeRoutes } from './recipes.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RecipeRoutes)
  ],
  providers: []
})
export class RecipesModule { }
