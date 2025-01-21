import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass, FormsModule],
  standalone: true,
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  div1BgColor: string = 'bg-success';
  isChecked: boolean = false

  addDiv1Color(className: string) {
    this.div1BgColor = className;
  }
}
