import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeRoutes } from './recipes.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(RecipeRoutes)
  ],
  providers: []
})
export class RecipesModule { }
