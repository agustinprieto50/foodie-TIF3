import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPlansService {
  constructor(private http: HttpClient){ }

  getPlans(): Observable<any[]> {
    const url = `/api/api/user_plans/${localStorage.getItem('user_id')}`
    return this.http.get<any[]>(url);
  }
}
