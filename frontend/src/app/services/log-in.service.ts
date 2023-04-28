import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { }

  url = "/api/auth/login"
  logIn(data:any) : Observable<any> {
    return this.http.post(this.url, data).pipe(take(1))
  }
}
