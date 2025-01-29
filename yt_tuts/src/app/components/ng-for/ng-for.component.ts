import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';
import { ProgressBarComponent } from '../../reusable/progress-bar/progress-bar.component';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, NaPipe, ProgressBarComponent], // implemented custom pipes
  standalone: true,
  templateUrl: './ng-for.component.html',
  // styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  courceName: string = "Angular";
  date: Date = new Date();
  studentObj: any = {
    name: 'John',
    age: 25,
    city: 'Ahmedabad',
    gender: 'Male'
  }
  cityList: string[] = ["Ahmedabad", "Gandhinagar", "Surat", "Vadodara", "Rajkot"];
  empList: any[] = [
    { empId: 101, name: undefined, salary: 5000, attendance: 40 },
    { empId: 102, name: "Jane", salary: null, attendance: 50 },
    { empId: 103, name: "Smith", salary: 7000, attendance: 60 },
    { empId: 104, name: "Steve", salary: 8000, attendance: 70 },
    { empId: 105, name: "", salary: 9000, attendance: 80 }
  ]
}
