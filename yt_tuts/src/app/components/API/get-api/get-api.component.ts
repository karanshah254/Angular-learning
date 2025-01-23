import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  standalone: true,
  templateUrl: './get-api.component.html',
  // styleUrl: './get-api.component.css'
})
export class GetAPIComponent {

  userList: any = [

  ];
  
  constructor(private http: HttpClient) {
    // constructor
  }

  getUsers() {
    // get call
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      this.userList = result;
    })
  }
}
