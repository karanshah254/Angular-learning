import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  standalone: true,
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList: string[] = ["Ahmedabad", "Gandhinagar", "Surat", "Vadodara", "Rajkot"];
  empList: any[] = [
    { empId: 101, name: "John", salary: 5000 },
    { empId: 102, name: "Doe", salary: 6000 },
    { empId: 103, name: "Smith", salary: 7000 },
    { empId: 104, name: "Steve", salary: 8000 },
    { empId: 105, name: "Mark", salary: 9000 }
  ]
}
