import { Component, Input, OnInit } from '@angular/core';
import { GetRecipeDetailsService } from 'src/app/services/get-recipe-details.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css']
})
export class PlanCardComponent implements OnInit{
  recipeDetails: any[] = [];

  @Input() recipe_id: any
  
  @Input() planObject: any;

  constructor(private getRecipeDetails: GetRecipeDetailsService) {}

  ngOnInit() {
      this.planObject.recipes.forEach((recipe:any) => {
        this.getDetails(recipe.recipe_id_fatsecret_sor, recipe.day_of_the_week)
      });
  }

  getDetails(recipe_id:number, day_of_the_week:string) {
    this.getRecipeDetails.getRecipe(recipe_id).subscribe((response:any) => {
      response['day_of_the_week'] = day_of_the_week
      this.recipeDetails.push(response) ;
    })

  }

}
  
