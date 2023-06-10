import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CreateShippingOrderService } from 'src/app/services/create-shipping-order.service';

@Component({
  selector: 'app-checkout-process',
  templateUrl: './checkout-process.component.html',
  styleUrls: ['./checkout-process.component.css']
})
export class CheckoutProcessComponent implements OnInit{


  constructor(private createOrder: CreateShippingOrderService){}
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

 

  items:any[] = []
  done:any
  isEmpty:boolean = false
  total:number = 0
  street:any
  ngOnInit(){
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

  formData: any = {}; // Object to store form data

  submitForm(): void {
    // Perform form submission logic here
    console.log(this.formData); // Example: Log form data to the console
  }


  submit() {
    const body = {
     "referenceId": "Client Internal Reference",
     "isTest": true,
     "notificationMail":  "a.prieto@alumno.um.edu.ar",
     "items": this.items,
     "waypoints": [
       {
         "type": "PICK_UP",
         "addressStreet": "Chile 1674",
         "addressAdditional": "Piso 6 Recepción",
         "city": "Mendoza",
         "phone": "+59898765432",
         "name": "Oficina Ciudad Vieja",
         "instructions": "El ascensor esta roto."
       },
       {
         "type": "DROP_OFF",
         "addressStreet": this.street,
         "addressAdditional": "Piso 1, Oficina Delivery",
         "city": "Mendoza",
         "phone": "+59812345678",
         "name": "Agustin",
         "instructions": "Entregar en mano"
         
       }
     ]
 
    }
    this.createOrder.post(JSON.stringify(body)).subscribe((response)=>{
      console.log(response)
      this.done = true
    })

   }
}
