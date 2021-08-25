import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipes/recipes.interface';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  constructor(private service: RecipesService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    let form = {}
    this.service.getAllRecipes(form).subscribe(data => {
      this.recipes = data;
    });
  }
}
