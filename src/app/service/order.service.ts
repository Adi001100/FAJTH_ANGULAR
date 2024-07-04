import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderInfoDTO } from '../model/order-info-dto.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:8080/api/order/create';

  constructor(private http: HttpClient) { }

  createOrder(orderData: any): Observable<OrderInfoDTO> {
    return this.http.post<OrderInfoDTO>(this.apiUrl, orderData);
  }
}
