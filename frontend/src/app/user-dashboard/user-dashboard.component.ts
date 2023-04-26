import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/User';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  public users!: MatTableDataSource<User>;
  public displayedColumns: string[] = [
    'name',
    'email',
    'password',
    'address',
    'isAdmin',
    'action',
  ];

  constructor(private router: Router, private userSvc: UserService) {}

  ngOnInit() {
    this.userSvc
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.users = new MatTableDataSource(users);
      });
  }

  createUser() {
    this.router.navigateByUrl('/create-user');
  }

  editUser(id: string) {
    this.router.navigateByUrl(`/edit-user/${id}`);
  }

  deleteUser(id: string) {
    this.userSvc
      .deleteUser(id)
      .pipe(first())
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
