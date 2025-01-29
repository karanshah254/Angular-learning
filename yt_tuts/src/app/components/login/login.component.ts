import { Component, inject } from "@angular/core";
import { APILOGIN, Login } from "../../model/login";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  imports: [FormsModule],
  standalone: true,
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css"
})
export class LoginComponent {
  loginObj: Login = new Login();  // created a login object

  apiLoginObj: APILOGIN = new APILOGIN();  // created an API login object

  router = inject(Router)

  http = inject(HttpClient)

  onLogin() {
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.apiLoginObj).subscribe((res: any)=> {
      debugger;
      localStorage.setItem("user", res.data.userId)
      // alert("Login Successfull");
      this.router.navigateByUrl("admin");
    }, error => {
      debugger;
      console.log(error);
      console.log("Login failed")
    })
  }
}
