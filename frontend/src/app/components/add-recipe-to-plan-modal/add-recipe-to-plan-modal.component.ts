import { Component } from '@angular/core';
import { GetPlansService } from 'src/app/services/get-plans.service';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-add-recipe-to-plan-modal',
  templateUrl: './add-recipe-to-plan-modal.component.html',
  styleUrls: ['./add-recipe-to-plan-modal.component.css']
})
export class AddRecipeToPlanModalComponent implements OnInit{
  plans$!: Observable<any[]>;
  selectedPlan:number = 0;
  
  constructor(private getPlans: GetPlansService){

  }

  ngOnInit(){
    this.plans$ = this.getPlans.getPlans()
  }

  onSelectPlan(planId:number){
    this.selectedPlan = planId
  }

  onSubmit(){
    
  }
}
