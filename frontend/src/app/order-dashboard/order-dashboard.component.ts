import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/Order';

import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from '../services/order.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.scss'],
})
export class OrderDashboardComponent implements OnInit {
  public orders!: MatTableDataSource<Order>;
  displayedColumns = ['id', 'name', 'address', 'totalPrice', 'status'];

  constructor(private orderSvc: OrderService) {}

  ngOnInit() {
    this.orderSvc
      .getAll()
      .pipe(first())
      .subscribe((orders) => {
        this.orders = new MatTableDataSource(orders);
      });
  }
}
