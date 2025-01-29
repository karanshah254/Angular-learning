## Reusable component
- >Components that are used again and again over different pages are termed as reusable component.


### Use of @Input
- >It is used to transfer data from parent to child.
- >It is writable.
- >Use of **@Input** decorator to initialize it.
- >The parent component binds to a component property via property binding. Angular updates the value in the child component whenever the value in the parent component changes.
- >In child component:
```ts
import { Component, Input } from '@angular/core';
export class UserAvatarComponent {
  @Input() imageUrl!: string;
}
```


### Use of @Output
- >This property is used when tranfering data from child to parent component or directive.
- >This property is observable.
- >Use of **@Output** decorator along with **EventEmitter**
- >Using event binding, the parent component listens to events and reads the data.
- >In child component:
```ts
import { Output, EventEmitter } from '@angular/core';
export class childClass implements OnInit {
    @Output() uploaded = new EventEmitter<string>();
    uploaderImage(value: string) {
        // data will be emitted by emit method to parent component
        this.upload.emit(value)
    }
}
```