import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  currentStep: number = 1;
  
  nextStep(): void {
    if (this.currentStep < 2) {
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
}
