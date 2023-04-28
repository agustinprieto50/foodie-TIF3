import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
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
