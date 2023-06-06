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
        console.log(recipe.recipe_id_fatsecret_sor)
        this.getDetails(recipe.recipe_id_fatsecret_sor)
      });
  }

  getDetails(recipe_id:number) {
    this.getRecipeDetails.getRecipe(recipe_id).subscribe((response) => {
      this.recipeDetails.push(response) ;
      console.log(this.recipeDetails)
    })

  }

}
  
