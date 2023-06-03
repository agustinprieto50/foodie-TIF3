import { Component, Input } from '@angular/core';
import { GetRecipeDetailsService } from 'src/app/services/get-recipe-details.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css']
})
export class PlanCardComponent {

  @Input() planObject:any

  constructor(private getRecipeDetails: GetRecipeDetailsService){
  }

  



}
