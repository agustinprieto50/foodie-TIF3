import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  
  items:any[] = []
  isEmpty:boolean = false
  constructor() {}

  ngOnInit(){
    const itemsString: string | null = localStorage.getItem('items')
    if (itemsString !== null) {
      this.items = JSON.parse(itemsString);
    }
    if (this.items.length === 0){
      this.isEmpty = true
    }
  }

}
