import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css']
})
export class PlanCardComponent {

  @Input() planTitle:any
  @Input() planDescription:any


  constructor(){
  }



}
