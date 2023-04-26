import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public foods!: Food[];

  constructor(private router: Router, private foodSvc: FoodService) {}

  ngOnInit() {
    this.foodSvc.getAll().pipe(first()).subscribe(foods => {
      this.foods = foods;
    });
  }

  public addFood() {
    this.router.navigateByUrl('/create-product');
  }

  public editFood(id: string) {
    this.router.navigateByUrl(`/edit-product/${id}`);
  }

  public deleteFood(id: string) {
    this.foodSvc.deleteProduct(id).pipe(first()).subscribe(() => {
      this.ngOnInit();
    });
  }  
}