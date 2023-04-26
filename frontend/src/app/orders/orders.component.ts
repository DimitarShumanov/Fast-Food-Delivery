import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/Order';
import { first } from 'rxjs';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  public orders!: MatTableDataSource<Order>;
  displayedColumns = ['id', 'name', 'address', 'totalPrice', 'status'];

  constructor(private orderSvc: OrderService, private userSvc: UserService) {}

  ngOnInit() {
    const id = this.userSvc.currentUser.id;
    this.orderSvc
      .getOrdersByUserId(id)
      .pipe(first())
      .subscribe((data) => {
        this.orders = new MatTableDataSource(data);
      });
  }
}
