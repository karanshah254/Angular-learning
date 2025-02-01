import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-temp-ng-container',
  imports: [NgFor, NgIf, NgTemplateOutlet],
  standalone: true,
  templateUrl: './ng-temp-ng-container.component.html',
  styleUrl: './ng-temp-ng-container.component.css'
})
export class NgTempNgContainerComponent {
  employeeArray: any[] = [
    { empId: 101, name: "John", salary: 5000, attendance: 40, isActive: false },
    { empId: 102, name: "Jane", salary: 6000, attendance: 50 , isActive: true},
    { empId: 103, name: "Smith", salary: 7000, attendance: 60, isActive: false },
    { empId: 104, name: "Steve", salary: 8000, attendance: 70, isActive: false },
    { empId: 105, name: "Harvey", salary: 9000, attendance: 80, isActive: true }
  ]

  isLoader: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isLoader = false;
    }, 3000)
  }
}
