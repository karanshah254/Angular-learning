import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-chartjs';

  showLineChart: boolean = false
  showBarChart: boolean = false

  showButtonLine: boolean = true
  showButtonBar: boolean = true

  textLine: string = "Click"
  textBar: string = "Click"
  graph1: string = 'bar'
  graph2: string = 'line'

  onClick(type: any) {
    if (type === 'line') {
      this.showLineChart = !this.showLineChart;
      this.showButtonBar = !this.showButtonBar;
      this.graph2 = 'bar';
      if (this.showLineChart) {
        this.textLine = "Hide"
        this.graph2 = 'bar';
      } else {
        this.textLine = "Click"
        this.graph2 = 'line';
      }

    } else if (type === 'bar') {
      this.showBarChart = !this.showBarChart;
      this.showButtonLine = !this.showButtonLine
      if (this.showBarChart) {
        this.textBar = "Hide"
        this.graph1 = "line"
      } else {
        this.textBar = "Click"
        this.graph1 = "bar"
      }
    }
  }
}
