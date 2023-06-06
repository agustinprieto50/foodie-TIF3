import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-order',
  templateUrl: './shipping-order.component.html',
  styleUrls: ['./shipping-order.component.css']
})
export class ShippingOrderComponent implements OnInit{
  items:any

  constructor() { }

  ngOnInit(){
    const itemsString: string | null = localStorage.getItem('items')
    if (itemsString !== null) {
      this.items = JSON.parse(itemsString);
    }
  }
}
