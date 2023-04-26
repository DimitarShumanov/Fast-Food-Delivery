import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../shared/models/Food';
import { FoodService } from '../services/food.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  public editForm!: FormGroup;
  public imageUrl!: string;
  public selectedFile: any;
  // food object to be edited
  public food!: Food;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private foodSvc: FoodService
  ) {}

  ngOnInit() {
    // get the food id from the route parameters
    const id = this.route.snapshot.params['id'];
    // retrieve the food object from the API endpoint using the id
    this.foodSvc
      .getFoodById(id)
      .pipe(first())
      .subscribe((data: any) => {
        this.food = data;
        // create a new form group with the retrieved food object
        this.editForm = this.formBuilder.group({
          name: [this.food.name, Validators.required],
          price: [this.food.price, Validators.required],
          cookingTime: [this.food.cookingTime, Validators.required],
          favorite: [this.food.favorite],
          origins: [this.food.origins, Validators.required],
          stars: [this.food.stars, Validators.required],
          imageUrl: [this.food.imageUrl, Validators.required],
          tags: [this.food.tags],
          description: [this.food.description, Validators.required],
          isOnSale: [this.food.isOnSale],
          salePrice: [this.food.salePrice, Validators.required],
        });
      });
  }
  public onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  public editProduct(id: string): void {
    const updatedFood = this.editForm.value;

    this.foodSvc
      .updateProduct(updatedFood, id)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }
}
