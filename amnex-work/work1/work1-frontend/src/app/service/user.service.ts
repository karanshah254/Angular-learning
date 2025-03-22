import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  srNo: number;
  name: string;
  gender: string;
  pincode: number;
  dob: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private users: User[] = [];

  private usersSubject = new BehaviorSubject<User[]>(this.users);
  users$ = this.usersSubject.asObservable();

  constructor() {
    this.loadUsers();
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  private loadUsers() {
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [
      { srNo: 1, name: 'John Doe', gender: 'Male', pincode: 123456, dob: '1990-01-01' },
      { srNo: 2, name: 'Jane Doe', gender: 'Female', pincode: 654321, dob: '1992-02-02' },
      { srNo: 3, name: 'Alice Smith', gender: 'Female', pincode: 112233, dob: '1988-03-15' },
      { srNo: 4, name: 'Bob Johnson', gender: 'Male', pincode: 445566, dob: '1985-07-20' },
      { srNo: 5, name: 'Charlie Brown', gender: 'Male', pincode: 778899, dob: '1995-11-10' }
    ];
    this.usersSubject.next(this.users);
  }

  getUsers() {
    return this.users$;
  }

  addUser(user: User) {
    this.users.push(user);
    this.usersSubject.next(this.users);
    this.saveUsers();
  }

  updateUser(updatedUser: User) {
    const index = this.users.findIndex((user) => user.srNo === updatedUser.srNo);
    if (index > -1) {
      this.users[index] = updatedUser;
      this.usersSubject.next(this.users);
      this.saveUsers();
    }
  }

  deleteUser(srNo: number) {
    this.users = this.users.filter((user) => user.srNo !== srNo);
    this.users = this.users.map((user, index) => ({
      ...user,
      srNo: index + 1,
    }));
    this.usersSubject.next(this.users);
    this.saveUsers();
  }

  getUserBySrNo(srNo: number): User | undefined {
    return this.users.find((user) => user.srNo === srNo);
  }

  getCurrentUsers() {
    return this.usersSubject.getValue();
  }
}
