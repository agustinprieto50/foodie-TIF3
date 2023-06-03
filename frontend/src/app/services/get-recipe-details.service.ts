import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetRecipeDetailsService {

  constructor(private http: HttpClient) { }

  getRecipe(recipe_id:number){
    const url = `/api/api/get_recipes/${recipe_id}`
    return this.http.get(url)
  }
}
