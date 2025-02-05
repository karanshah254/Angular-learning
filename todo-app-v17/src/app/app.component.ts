import { NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, FormsModule, UpperCasePipe],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';

  taskList: any[] = [
    { id: 0, name: 'run' },
    { id: 1, name: 'walk' },
    { id: 2, name: 'sleep' }
  ]

  addtask(task: string) {
    this.taskList.push({ id: this.taskList.length, name: task })
  }

  deleteTask(index: number) {
    this.taskList = this.taskList.filter((task) => task.id !== index)
  }
}
