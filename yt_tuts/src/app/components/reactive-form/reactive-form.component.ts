import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  // Create a FormGroup object and addming validation in reactive form
  userForm: FormGroup = new FormGroup({
    fName: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userName: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl('Gujarat'),
    zipCode: new FormControl(''),
    isAgreeTerms: new FormControl(false)
  });

  constructor() {
    // Disable the state field
    this.userForm.controls['state'].disable();
    setTimeout(() => {
      // enable state field after 5 seconds
      this.userForm.controls['state'].enable();
    }, 5000)
  }

  onSave() {
    const formValue = this.userForm.value;
    debugger;
  }
}
