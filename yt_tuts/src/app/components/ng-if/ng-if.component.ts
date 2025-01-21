import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf, FormsModule], // to use any structural directive, you need to import CommonModule or NgIf
  standalone: true,
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  div1Visible: boolean = true;
  number1: number = 0;
  number2: number = 0;

  // functions to show and hide div-1
  hideDiv() {
    this.div1Visible = false;
  }
  showDiv() {
    this.div1Visible = true;
  }
}
