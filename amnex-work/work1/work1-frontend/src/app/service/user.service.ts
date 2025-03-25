import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
  private apiUrl = 'http://localhost:8090/users';

  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUsersFromBackend();
  }

  getUsers() {
    return this.users$;
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.srNo}`, user);
  }

  deleteUser(srNo: number) {
    return this.http.delete<void>(`${this.apiUrl}/${srNo}`);
  }

  getUserBySrNo(srNo: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${srNo}`);
  }

  getCurrentUsers() {
    return this.usersSubject.getValue();
  }

  loadUsersFromBackend() {
    this.http.get<User[]>(this.apiUrl).subscribe((users) => {
      this.usersSubject.next(users); // Emit updated list immediately
    });
  }
}
