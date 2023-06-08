import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateShippingOrderService {

  url = '/api/api/shipping_order'
  constructor(private http: HttpClient) { }

  post(data:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url, data, { headers: headers })
  }


}
