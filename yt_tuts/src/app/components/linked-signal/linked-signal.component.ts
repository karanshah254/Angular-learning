import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  standalone: true,
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
  firstName = signal<string>('John');
  lastName = signal<string>('Doe');

  // steps to link or merge two signals to form linked signals
  fullName = linkedSignal({
    source: this.firstName,
    // main step to merge two values
    computation: (newValue, prevValue) => {
      return newValue + ' ' + this.lastName();
    }
  })

  user = signal({
    id: '111',
    name: 'John',
  })

  email = linkedSignal({
    source: this.user,
    computation: (user) => `${user.name + user.id}@gmail.com`, // merge the user name and id to form email
    equal: (a: any, b: any) => a.id === b.id // check if the value has changed
    // equal: (a: any, b: any) => a.id !== b.id // this will only work if the id is not equal to the previous id
  })

  changeFName() {
    this.firstName.set('Jane');
  }

  changeId() {
    // this will only work if the id is not equal to the previous id
    this.user.set({
      id: '222',
      name: 'Jane'
    })
  }
}
