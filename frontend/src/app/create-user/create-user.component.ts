import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/models/User';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userSvc: UserService ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
      isAdmin: [false, Validators.required],
    });
  }

  createUser() {
    const user: User = this.userForm.value;
    this.userSvc.createUser(user)
    .pipe(
      catchError(err => {
        console.log(err);
        return of(null);
      })
    )
    .subscribe(res => {
      if (res) {
        console.log(res);
        this.userForm.reset();
      }
    });
    this.router.navigateByUrl('/user-dashboard');
  }

}
