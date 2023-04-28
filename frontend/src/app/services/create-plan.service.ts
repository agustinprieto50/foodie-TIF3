import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class CreatePlanService {
  url = '/api/api/plan'
  constructor(private http: HttpClient) { }
  post(data:any, headers:any){
    return this.http.post(this.url, data, { headers: headers })
  }
}
