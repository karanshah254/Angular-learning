import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './classes/userObject';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'crud-operation-practice';

  isNewUser: boolean = false;
  userObj: User = new User();
  userArray: User[] = [];

  ngOnInit(): void {
    // debugger;
    let userData = localStorage.getItem('user');
    if (userData !== null) {
      this.userArray = JSON.parse(userData);
    }
  }

  showHide() {
    this.isNewUser = !this.isNewUser;
  }

  onSave() {
    // debugger;
    this.userObj.userId = this.userArray.length + 1;
    this.userArray.push(this.userObj);
    this.userObj = new User();
    localStorage.setItem('user', JSON.stringify(this.userArray));
    this.showHide();
  }

  onEdit(data: User) {
    this.userObj = data;
    this.showHide();
  }

  onUpdate() {
    const record = this.userArray.find(x => x.userId === this.userObj.userId);
    if (record !== undefined) {
      record.fName = this.userObj.fName;
      record.lName = this.userObj.lName;
      record.username = this.userObj.username;
      record.city = this.userObj.city;
      record.state = this.userObj.state;
      record.zipCode = this.userObj.zipCode;
      record.isAgree = this.userObj.isAgree;
    }
    localStorage.setItem('user', JSON.stringify(this.userArray));
    this.showHide();
  }

  onDelete(userId: number) {
    const isDelete = confirm('Are you sure you want to delete this record?');
    if (isDelete) {
      const index = this.userArray.findIndex(x => x.userId === userId);
      this.userArray.splice(index, 1);
      localStorage.setItem('user', JSON.stringify(this.userArray));
    }
  }
}