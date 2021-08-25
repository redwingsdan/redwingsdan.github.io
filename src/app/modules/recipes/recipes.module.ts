import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeRoutes } from './recipes.routes';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../shared/core.module';

@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CoreModule,
    RouterModule.forChild(RecipeRoutes)
  ],
  providers: []
})
export class RecipesModule { }
