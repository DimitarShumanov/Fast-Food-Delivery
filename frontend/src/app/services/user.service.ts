import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {
  USER_LOGIN_URL,
  USER_REGISTER_URL,
  USER_BY_ID_URL,
  USER_URL
} from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { User } from '../shared/models/User';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(
    this.getUserFromLocalStorage()
  );
  public userObservable: Observable<User>;
  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser(): User {
    return this.userSubject.value;
  }

  public login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Добре дошли в SpacePeackers ${user.name}!`,
            'Вход успешен'
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Вход неуспешен');
        },
      })
    );
  }

  public logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;
    return new User();
  }

  public register(userRegiser: IUserRegister): Observable<User> {
    return this.http.post<User>(USER_REGISTER_URL, userRegiser).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Добре дошли в SpacePeackers ${user.name}`,
            'Регистрацията успешна'
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(
            errorResponse.error,
            'Регистрацията неуспешна'
          );
        },
      })
    );
  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(USER_URL);
  }

  public getUserById(id: string): Observable<User> {
    return this.http.get<User>(USER_BY_ID_URL + id);
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(USER_BY_ID_URL, user);
  }

  public updateUser(updatedUser: User, id: string): Observable<User> {
    return this.http.patch<User>(USER_BY_ID_URL + id, updatedUser);
  }

  public deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(USER_BY_ID_URL + id)
  }
}
