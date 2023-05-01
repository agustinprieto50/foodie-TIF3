import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipes-card',
  templateUrl: './recipes-card.component.html',
  styleUrls: ['./recipes-card.component.css']
})
export class RecipesCardComponent {
  @Input() recipeDescription:any
  @Input() recpieId:any
  @Input() recipeImg:any
  @Input() ingredients: any[] = [];

  constructor(){}

}
