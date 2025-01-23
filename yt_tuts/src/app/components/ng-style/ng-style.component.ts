import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle, FormsModule],
  standalone: true,
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  div1Style: string = "";
  isChecked: boolean = false;

  myCss: any = {
    'font-size': '20px',
    'background-color': 'yellow'
  }

  addColor(color: string) {
    this.div1Style = color;
  }
}
