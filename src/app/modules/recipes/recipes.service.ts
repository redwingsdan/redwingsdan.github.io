import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dummyData, Recipe } from '../../shared/recipes/recipes.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  BASE_URL = "http://localhost:10000";
  readonly API_URL = 'api/recipes';

  constructor(private http: HttpClient) { }

  getAllRecipes(searchForm: any): Observable<Recipe[]> {
    return of(dummyData);
    return this.http
      .post<any>(`${this.API_URL}/load`, searchForm);
  }
}
