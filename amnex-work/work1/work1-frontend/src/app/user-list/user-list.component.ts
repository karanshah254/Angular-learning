import { DatePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { User, UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, DatePipe, NgxPaginationModule],
  templateUrl: './user-list.component.html',
  styles: [
    `
    .short-dropdown {
      height: 35px;
      padding: 5px;
      font-size: 14px;
    }
    `
  ]
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  // for static pagination of the data
  currentPage = 1;
  itemsPerPage = 5;

  // for dynamic pagination of the data
  itemsPerPageOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
    this.userService.getUsers().subscribe((users) => {
      this.users = users; // Display users dynamically as they load
    });
  }

  editUser(srNo: number) {
    this.router.navigate([`/user-form/edit/${srNo}`]);
  }

  deleteUser(srNo: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(srNo).subscribe(() => {
        this.users = this.users.filter(user => user.srNo !== srNo); // Remove from UI instantly
      }, (error) => {
        console.error('Error deleting user:', error);
      });
    }
  }

  changeItemsPerPage(event: any) {
    this.itemsPerPage = event.target.value;
    this.currentPage = 1;
  }

  goToForm() {
    this.router.navigate(['/user-form']);
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
