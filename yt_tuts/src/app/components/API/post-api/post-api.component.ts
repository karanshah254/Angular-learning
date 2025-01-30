import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from "../../../reusable/progress-bar/progress-bar.component";
import { TabsComponent } from "../../../reusable/tabs/tabs.component";
import { Car, ICarList } from '../../../model/car';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, TabsComponent],
  standalone: true,
  templateUrl: './post-api.component.html',
  // styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {
  carList: ICarList[] = []; // Array of ICarList interface

  carObj: Car = new Car(); // Object of Car class

  http = inject(HttpClient); // Injecting HttpClient to make API calls

  currentTab: string = 'New Car'; // Default tab

  // VIEWCHILD START
  @ViewChild('txtCity') cityTextBox: ElementRef | undefined;  // ViewChild to get the reference of the input element
  readCity() {
    // debugger;
    const city = this.cityTextBox?.nativeElement.value;
    if (this.cityTextBox) {
      this.cityTextBox.nativeElement.style.color = 'red';
    }
  }
  // END OF VIEWCHILD

  // use of reusable component along with @Output
  onTabChange(tabName: string) {
    // making this button groups dynamic by using reusable component
    this.currentTab = tabName;
  }

  // uaing ngOnInit to make API CALLS
  ngOnInit(): void {
    this.getAllCar();
  }

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
        this.carObj = new Car();
      } else {
        console.log(res.message);
      }
    })
  }

  // to reset the form
  resetDetails() {
    this.carObj = new Car();
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