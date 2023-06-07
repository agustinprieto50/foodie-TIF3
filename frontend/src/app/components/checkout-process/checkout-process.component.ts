import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-process',
  templateUrl: './checkout-process.component.html',
  styleUrls: ['./checkout-process.component.css']
})
export class CheckoutProcessComponent implements OnInit{
  currentStep: number = 1;
  
  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submit(): void {
    // Perform submission logic or any other actions on final step
    // You can close the modal or perform additional tasks as needed
  }

  items:any[] = []
  isEmpty:boolean = false
  total:number = 0
  street:any
  ngOnInit(){
    const itemsString: string | null = localStorage.getItem('items')
    if (itemsString !== null) {
      this.items = JSON.parse(itemsString);
      this.items.forEach((item)=>{
        this.total += item['price']
      })
    }
    if (this.items.length === 0){
      this.isEmpty = true
    }
  }

  getTotal(){
    this.total = 0
    this.items.forEach((item)=>{
      this.total += item['price']*item['quantity']
    })
  }

  formData: any = {}; // Object to store form data

  submitForm(): void {
    // Perform form submission logic here
    console.log(this.formData); // Example: Log form data to the console
  }
}
