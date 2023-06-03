import { Component, Input, OnInit } from '@angular/core';
import { GetRecipeDetailsService } from 'src/app/services/get-recipe-details.service';

@Component({
  selector: 'app-display-recipe-details',
  templateUrl: './display-recipe-details.component.html',
  styleUrls: ['./display-recipe-details.component.css']
})
export class DisplayRecipeDetailsComponent implements OnInit {
  @Input() recipe_id:any
  recipeDetails:any

  constructor(private getRecipeDetails: GetRecipeDetailsService){ }

  ngOnInit() {
    this.getRecipeDetails.getRecipe(this.recipe_id).subscribe((response) => {
      this.recipeDetails = response;
    });
  }
}
