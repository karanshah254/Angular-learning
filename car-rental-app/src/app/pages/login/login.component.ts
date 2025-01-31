import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule], // directly useing formcontrolname in html file
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: FormControl = new FormControl("");
  password: FormControl = new FormControl("");

  router =  inject(Router)

  // constructor(private toastr: ToastrService) {}

  onLogin() {
    debugger;
    if (this.username.value === "admin" && this.password.value === "admin") {
      this.router.navigateByUrl("dashboard")
      // console.log("Login successful");
      alert("Login successful");
      // this.toastr.success("Login successful");
    } else {
      debugger;
      // console.log("Login failed");
      // this.toastr.error("Login failed");
      alert("Login failed due to invalid credentials");
    }
  }
}
