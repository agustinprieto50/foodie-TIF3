import { Component } from '@angular/core';
import { LogInService } from 'src/app/services/log-in.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  email:any
  password:any
  constructor(private logInService: LogInService, private router: Router){}
  onSubmit(){
    const data = {
      "email": this.email,
      "password": this.password
    }
    this.logInService.logIn(data).subscribe({
      next: (response =>{
        console.log("Login exitoso",response)
        localStorage.setItem("token",response.access_token)
        localStorage.setItem('user_id', response.id)
        this.router.navigate(['/home'])
      })
    })
  }
}
