import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  public createForm!: FormGroup;
  selectedFile!: File;
  imageUrl!: string;

  constructor( private formBuilder: FormBuilder, private router: Router, private foodSvc: FoodService) { 
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      cookingTime: [''],
      favorite: [false],
      origins: [[]],
      stars: [0, Validators.required],
      imageUrl: ['', Validators.required],
      tags: [[]],
      description: [''],
      isOnSale: [false],
      salePrice: [''],
    });
  }

  ngOnInit(): void {
  }

  createProduct() {
    const food: Food = this.createForm.value;
    this.foodSvc.createProduct(food)
    .pipe(
      catchError(err => {
        console.log(err);
        return of(null);
      })
    )
    .subscribe(res => {
      if (res) {
        console.log(res);
        this.createForm.reset();
      }
    });
    this.router.navigateByUrl('/dashboard');
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  
    const reader = new FileReader();
    reader.onload = () => {
      this.createForm.controls.imageUrl.setValue(reader.result as string);
    };
    reader.readAsDataURL(this.selectedFile);
  }
}
