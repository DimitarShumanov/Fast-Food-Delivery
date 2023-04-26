import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/User';
import { UserService } from '../services/user.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public editForm!: FormGroup;
  public user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userSvc: UserService
  ) {}

  ngOnInit(): void {
    // get the user id from the route parameters
    const id = this.route.snapshot.params['id'];

    // retrieve the user object from the API endpoint using the id
    this.userSvc.getUserById(id).pipe(first())
      .subscribe((data: User) => {
        this.user = data;

        // create a new form group with the retrieved user object
        this.editForm = this.formBuilder.group({
          name: [this.user.name, Validators.required],
          email: [this.user.email, [Validators.required, Validators.email]],
          password: [this.user.password, [Validators.required, Validators.minLength(6)]],
          address: [this.user.address, Validators.required],
          isAdmin: [this.user.isAdmin, Validators.required],
        });
      }
    );
  }
  public editUser(id: string): void {
    const updatedUser = this.editForm.value;

    this.userSvc.updateUser(updatedUser, id).subscribe(() => {
      this.router.navigate(['/user-dashboard']);
    });
  }
}
