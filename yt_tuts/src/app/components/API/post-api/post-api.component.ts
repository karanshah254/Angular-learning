import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './post-api.component.html',
  // styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  carList: any[] = [];
  carObj: any = {
    "carId": 0,
    "brand": "",
    "model": "",
    "year": "",
    "color": "",
    "regNo": ""
  };
  http = inject(HttpClient); // Injecting HttpClient to make API calls

  // first get all cars then add new car
  getAllCar() {
    this.http.get('/api/CarRentalApp/GetCars').subscribe((result: any) => {
      if (result && result.data) {
        console.log(result.data)
        this.carList = result.data; // Populate the carList array
      } else {
        console.error('Unexpected API response structure:', result);
      }
    },
      (error) => {
        console.error('API Error:', error);
      })
  }

  // for creating new car details in the table
  onSave() {
    debugger;
    this.http.post('/api/CarRentalApp/CreateNewCar', this.carObj).subscribe((res: any) => {
      if (res.result) {
        alert('Car added successfully');
        this.getAllCar();
      } else {
        console.log(res.message);
      }
    })
  }

  // function for put api call
  onEdit(value: any) {
    this.carObj = value;
  }

  // update the existing car details on selecting the specific record.
  updateCar() {
    this.http.put('/api/CarRentalApp/UpdateCar', this.carObj).subscribe((res: any) => {
      if (res.result) {
        alert('Car updates successfully');
        this.getAllCar();
      } else {
        console.log(res.message);
      }
    })
  }

  // to reset the form
  resetDetails() {
    this.carObj = {
      "carId": 0,
      "brand": "",
      "model": "",
      "year": "",
      "color": "",
      "regNo": ""
    }
  }

  // to delete the car details by using its ID
  onDelete(id: number) {
    const isDelete = confirm('Are you sure you want to delete this car?');
    if (isDelete) {
      this.http.delete(`/api/CarRentalApp/DeleteCarbyCarId?carid=${id}`).subscribe((res: any) => {
        if (res.result) {
          alert('Car deleted successfully');
          this.getAllCar();
        } else {
          console.log(res.message);
        }
      })
    }
  }
}