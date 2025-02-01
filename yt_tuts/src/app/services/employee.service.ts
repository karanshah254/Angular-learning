import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  tokenExpired$: Subject<boolean> = new Subject<boolean>();
  tokenrecieved$: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get('/api/CarRentalApp/GetCars');
  }

  createNewCar(carObject: any) {
    return this.http.post('/api/CarRentalApp/CreateNewCar', carObject)
  }
}
