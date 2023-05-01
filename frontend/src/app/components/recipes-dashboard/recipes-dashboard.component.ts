import { Component } from '@angular/core';
import { GetRecipesService } from 'src/app/services/get-recipes.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-dashboard',
  templateUrl: './recipes-dashboard.component.html',
  styleUrls: ['./recipes-dashboard.component.css']
})
export class RecipesDashboardComponent implements OnInit{

  recipeList: any[] = [];
  loading: boolean = false;
  recipeId:any
  constructor(private getRecipesServices: GetRecipesService){}

  ngOnInit(){
    this.loading = true;
    this.getRecipesServices.getRecipes().subscribe((response:any) =>{
      this.recipeList = (response.recipes.recipe)
      this.loading = false
    })
  }

}
