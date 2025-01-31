import { JsonPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, resource } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-customer',
  imports: [NgIf],
  standalone: true,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnDestroy {
  url: string = "https://freeapi.miniprojectideas.com/api/CarRentalApp/"
  masterService = inject(MasterService)

  ngOnDestroy(): void {
      this.masterService.searchData.next('')
  }

  constructor() {
    this.masterService.searchData.subscribe((result:any) => {
      // debugger;
    })
  }

  customerList = resource({
    loader: async () => {
      return fetch(`${this.url}GetCustomers`).then((result) => result.json() as Promise<any>)
    }
  })

  getCustomerData() {
    this.customerList.reload()
  }
}
