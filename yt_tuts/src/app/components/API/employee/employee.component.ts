import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './employee.component.html',
  // styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  carObject: any = {
    "carId": 0,
    "brand": "",
    "model": "",
    "year": "",
    "color": "",
    "regNo": ""
  };

  carArray: any[] = [];

  constructor(private carService: EmployeeService) {
    this.getCars();
  }

  // using service property in angular
  getCars() {
    this.carService.getCars().subscribe((result: any) => {
      this.carArray = result.data;
    })
  }

  // creating new car usinf service property in angular and its api call
  onSaveCar() {
    this.carService.createNewCar(this.carObject).subscribe((data: any) => {
      if(data.result) {
        alert('Car created successfully');
        this.getCars();
      } else {
        alert(data.message);
      }
    })
  }

  resetForm() {
    this.carObject = {
      "carId": 0,
      "brand": "",
      "model": "",
      "year": "",
      "color": "",
      "regNo": ""
    }
  }
}
