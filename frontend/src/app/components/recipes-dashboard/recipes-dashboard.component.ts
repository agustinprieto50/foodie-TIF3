import { Component, ViewChild, ElementRef } from '@angular/core';
import { GetRecipesService } from 'src/app/services/get-recipes.service';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPlansService } from 'src/app/services/get-plans.service';
import { AddRecipeToPlanService } from 'src/app/services/add-recipe-to-plan.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-recipes-dashboard',
  templateUrl: './recipes-dashboard.component.html',
  styleUrls: ['./recipes-dashboard.component.css']
})
export class RecipesDashboardComponent implements OnInit{

  recipeList: any[] = [];
  loading: boolean = false;
  recipeId:any
  plans$!: Observable<any[]>;
  selectedPlan:number = 0;
  selectedDay:any
  constructor(
    private getRecipesServices: GetRecipesService, 
    private getPlans: GetPlansService, 
    private addRecipeToPlan: AddRecipeToPlanService, 
    private router: Router){}

  ngOnInit(){
    this.loading = true;
    this.plans$ = this.getPlans.getPlans()
    this.getRecipesServices.getRecipes().subscribe((response:any) =>{
      this.recipeList = (response.recipes.recipe)
      this.loading = false
    })
  }
  onSelectPlan(planId:number){
    this.selectedPlan = planId
  }
  



  onSubmit(recipe_id:number){
    this.addRecipeToPlan.addRecipe(recipe_id, this.selectedPlan, this.selectedDay).subscribe((response)=>{
      console.log(response)
      this.router.navigate(['/home'])
      
    })
  }




}
