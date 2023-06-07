import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-shipping-order',
  templateUrl: './shipping-order.component.html',
  styleUrls: ['./shipping-order.component.css']
})
export class ShippingOrderComponent{
  items:any

  constructor() { }

  

  formData: any = {}; // Object to store form data

  submitForm(): void {
    // Perform form submission logic here
    console.log(this.formData); // Example: Log form data to the console
  }
}
