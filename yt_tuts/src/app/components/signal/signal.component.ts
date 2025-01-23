import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  standalone: true,
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush // disable change detection
})
export class SignalComponent {
  firstName = signal('John');
  lastName = signal<string>('Doe'); // strong typing signal
  courceName: string = 'Angular';
  rollNo = signal<number>(0); // strong typing signal

  constructor() {
    setTimeout(() => {
      // debugger;
      // on using changeDetection: ChangeDetectionStrategy.OnPush, the below line will not update the view
      this.courceName = 'React';

      // on using changeDetection: ChangeDetectionStrategy.OnPush, the below line will update the view
      this.firstName.set('Jane'); // change the signal value
    }, 5000);
  }

  onIncrement() {
    this.rollNo.update((val) => val + 1); // update the signal value
  }
}
