import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class GetRecipesService {
  constructor(private http: HttpClient) { }
  getRecipes(){
    const url = '/api/api/proxy'
    return this.http.get(url).pipe(take(1))
  }
}
