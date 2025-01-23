import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow-statement',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './control-flow-statement.component.html',
  // styleUrl: './control-flow-statement.component.css'
})
export class ControlFlowStatementComponent {
  div1Visible: boolean = true;
  isCheck: boolean = false;
  dayName: string = "";
  cityList: string[] = [
    "Mumbai", "Pune", "Ahmedabad", "Surat"
  ]

  showHideDiv1(value: boolean) {
    this.div1Visible = value;
  }
}
