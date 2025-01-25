import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get('/api/CarRentalApp/GetCars');
  }

  createNewCar(carObject: any) {
    return this.http.post('/api/CarRentalApp/CreateNewCar', carObject)
  }
}
