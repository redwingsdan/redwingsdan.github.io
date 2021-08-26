import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dummyData, Recipe } from '../../shared/recipes/recipes.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  readonly API_URL = "http://localhost:10000/recipes";

  constructor(private http: HttpClient) { }

  getAllRecipes(searchForm: any): Observable<Recipe[]> {
    return of(dummyData);
    return this.http
      .post<any>(`${this.API_URL}/load`, searchForm);
  }

  getRecipeById(recipeId: number): Observable<Recipe> {
    return of(dummyData.find(d => d.recipeId == recipeId));
    return this.http
      .get<any>(`${this.API_URL}/${recipeId}`);
  }

  saveRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http
      .post<Recipe>(`${this.API_URL}/`, recipe);
  }
}
