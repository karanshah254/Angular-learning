import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule], // forms-module has been used for ngModel directive for two way data binding
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = 'John';
  rollNo: number = 123;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = 'Enter your full name';
  classBG: string = 'bg-success';
  citySelected: string = '';

  constructor(private router: Router) {
    // console.log(this.firstName);
    // this.firstName = 'karan' // change the value of property/atrribute
    // this.showWelcomeMessage(); // this will call every time on page load.
  }

  showWelcomeMessage() {
    alert('Welcome to Angular V19');
  }

  cityChange() {
    alert('City Changed');
  }

  // route using button in ts file
  goToAdmin() {
    // using router to navigate to admin component
    this.router.navigateByUrl('/admin')
  }
}