import { Component, Input, OnInit } from '@angular/core';
import { GetRecipeDetailsService } from 'src/app/services/get-recipe-details.service';
import { ItemsListService } from 'src/app/services/items-list.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-display-recipe-details',
  templateUrl: './display-recipe-details.component.html',
  styleUrls: ['./display-recipe-details.component.css']
})
export class DisplayRecipeDetailsComponent implements OnInit {
  @Input() recipe_id:any
  recipeDetails:any
  loaded:boolean = false

  constructor(private getRecipeDetails: GetRecipeDetailsService, private location: Location,
    private itemsService: ItemsListService, private router: Router){ }

  ngOnInit() {
    this.getRecipeDetails.getRecipe(this.recipe_id).subscribe((response) => {
      this.recipeDetails = response;
      this.loaded = true
    });
  }

  addToItemsList(item: string){
    const itemsList = localStorage.getItem("items")
    let newList = []
    if (itemsList){
      newList = JSON.parse(itemsList)
    }
    if (!newList.includes(item)) {
      const min = 300;
      const max = 600;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      const newItem = {'item': item, 'price': randomNumber, 'quantity': 1}
      newList.push(newItem)
      localStorage.setItem('items', JSON.stringify(newList))
      window.location.reload()
    
    }
    else{
      console.log(item + ': The item has already been added')
    }
   

  }

  
}
