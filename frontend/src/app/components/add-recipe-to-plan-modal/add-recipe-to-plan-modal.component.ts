import { Component, Input } from '@angular/core';
import { GetPlansService } from 'src/app/services/get-plans.service';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { AddRecipeToPlanService } from 'src/app/services/add-recipe-to-plan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe-to-plan-modal',
  templateUrl: './add-recipe-to-plan-modal.component.html',
  styleUrls: ['./add-recipe-to-plan-modal.component.css']
})
export class AddRecipeToPlanModalComponent implements OnInit{
  @Input() recipeId:any;
  plans$!: Observable<any[]>;
  selectedPlan:number = 0;
  
  constructor(private getPlans: GetPlansService, private addRecipeToPlan: AddRecipeToPlanService, private router: Router){

  }

  ngOnInit(){
    this.plans$ = this.getPlans.getPlans()
  }

  onSelectPlan(planId:number){
    this.selectedPlan = planId
  }

  onSubmit(){
    this.addRecipeToPlan.addRecipe(this.recipeId, this.selectedPlan).subscribe((response)=>{
      console.log(response)
      this.router.navigate(['/comidas'])
    })
  }
}
