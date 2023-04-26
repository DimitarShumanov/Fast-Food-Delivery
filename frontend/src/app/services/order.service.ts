import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORDER_BY_ID_URL, ALL_ORDERS_URL, ORDER_CREATE_URL, ORDER_NEW_FOR_CURRENT_USER_URL, ORDER_PAY_URL, ORDER_TRACK_URL} from '../shared/constants/urls';
import { Observable } from 'rxjs';
import { Order } from '../shared/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  public create(order:Order){
    return this.http.post<Order>(ORDER_CREATE_URL, order);
  }

  public getNewOrderForCurrentUser():Observable<Order>{
    return this.http.get<Order>(ORDER_NEW_FOR_CURRENT_USER_URL);
  }

  public pay(order:Order):Observable<string>{
    return this.http.post<string>(ORDER_PAY_URL,order);
  }

  public trackOrderById(id:number): Observable<Order> {
    return this.http.get<Order>(ORDER_TRACK_URL + id)
  }

  public getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(ALL_ORDERS_URL);
  }

  public getOrdersByUserId(id: string): Observable<Order[]> {
    return this.http.get<Order[]>(ORDER_BY_ID_URL + 'user/' + id);
  }
}
