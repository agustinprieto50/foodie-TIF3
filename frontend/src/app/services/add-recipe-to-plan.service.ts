import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddRecipeToPlanService {

  constructor(private http: HttpClient) { }
  
  addRecipe(recipeID: number, planID: number, weekDay:string){
    const url = `api/api/plan/${planID}`
    const data = {"recipe": 
                    {
                    "recipe_id_fatsecret_sor": recipeID,
                    "plan_id": planID,
                    "day_of_the_week":  weekDay
                    }
                  }

    return this.http.put(url, data)
  }
}
