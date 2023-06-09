import { Component } from '@angular/core';
import { CreatePlanService } from 'src/app/services/create-plan.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-plan-modal',
  templateUrl: './create-plan-modal.component.html',
  styleUrls: ['./create-plan-modal.component.css']
})


export class CreatePlanModalComponent {

  title:any
  description:any
  startDate:any
  endDate:any

  constructor(private createPlanService: CreatePlanService, private http:HttpClient, 
              private activeModal: NgbActiveModal, private router: Router){}

  onSubmit(){
    console.log(this.startDate)
    console.log(this.endDate)

    const body = {"title": this.title, "description": this.description, "from_date": this.startDate, "to_date": this.endDate}
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })   
    this.createPlanService.post(body, headers).subscribe(response =>{
      console.log(response)
    })
    this.activeModal.close()
    this.router.navigate(['/home'])

  }
  refresh() {
    location.reload();
  }


}
