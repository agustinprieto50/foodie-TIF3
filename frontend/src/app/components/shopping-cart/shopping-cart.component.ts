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
  total:number = 0
  constructor() {}

  ngOnInit(){
    this.getTotal()
    console.log(this.total)
    const itemsString: string | null = localStorage.getItem('items')
    if (itemsString !== null) {
      this.items = JSON.parse(itemsString);
      this.items.forEach((item)=>{
        this.total += item['value']
      })
    }
    if (this.items.length === 0){
      this.isEmpty = true
    }
  }

  getTotal(){
    this.total = 0
    this.items.forEach((item)=>{
      this.total += item['value']*item['quantity']
    })
  }

}
