import { Component } from '@angular/core';

@Component({
  selector: 'app-user-test',
  standalone: true,
  imports: [],
  templateUrl: './user-test.component.html',
  styleUrl: './user-test.component.css'
})
export class UserTestComponent {
  componentName: string = "user-test";

  sum() {
    return 100
  }
}
