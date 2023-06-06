import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit{

  constructor(private router: Router){}

  isToken:any
  ngOnInit(){
    this.isToken = localStorage.getItem('token')
    if (this.isToken){
      this.router.navigate(['/home'])
    }
    else{
      this.router.navigate(['/log-in'])
    }
  }

}
