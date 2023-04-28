import { Component, OnInit} from '@angular/core';
import { GetPlansService } from 'src/app/services/get-plans.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit{
  plans$!: Observable<any[]>;

  constructor(private getPlansService: GetPlansService){
  }

  ngOnInit(){
    this.plans$ = this.getPlansService.getPlans();
  }
  

 
}
