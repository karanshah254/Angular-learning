import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-vehicles',
  imports: [AsyncPipe],
  standalone: true,
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent implements OnDestroy {
  carList$: Observable<any[]> = new Observable<any[]>; // creating async pipe

  vehiclesFormData = signal({
    carId: 0,
    brand: '',
    model: '',
    year: 0,
    dailyRate: 0,
    color: '',
    regNo: ''
  })
  apiUrl: string = "https://freeapi.miniprojectideas.com/api/CarRentalApp/"
  http = inject(HttpClient);

  masterService = inject(MasterService)

  ngOnDestroy(): void {
    this.masterService.searchData.next('')
  }

  constructor() {
    this.masterService.searchData.subscribe((result: any) => {
      // debugger;
    })

    // using async pipe to get the data (GET CALL)
    this.carList$ = this.http.get<any[]>(`${this.apiUrl}GetCars`).pipe(
      map((result: any) => {
        return result.data;
      })
    );
  }

  updateForm(key: string, event: any) {
    // debugger;
    this.vehiclesFormData.update((data: any) => ({
      ...data,
      [key]: event.target.value
    }))
  }

  onSave() {
    debugger;
    this.http.post(`${this.apiUrl}CreateNewCar`, this.vehiclesFormData()).subscribe((response: any) => {
      if (response.result) {
        alert("Vehicle added successfully");
      } else {
        alert(response.message);
      }
    })
  }
}
