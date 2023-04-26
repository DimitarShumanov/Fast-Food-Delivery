import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from '../shared/models/Order';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.scss']
})
export class OrderTrackPageComponent implements OnInit {
  
  order!: Order;
  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService) { }
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(!params.overId) return;
    this.orderService.trackOrderById(params.overId).subscribe(order => {
      this.order = order;
    })
  }

}
