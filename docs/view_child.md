## What is viewchild ?
- >iewChild is a decorator that is used to get a reference to a child component or an element within a parent component. It allows the parent component to access and interact with the properties, methods, and events of the child component or element.
- > use the @ViewChild decorator to create a reference to the child component or element. For example, if you have a child component named “ChildComponent”, you can reference it as follows:
```ts
import { ChildComponent } from './child.component';

@Component({
  // its logic
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComponentRef: ChildComponent;
  // rest of logic
}
```
- >In the parent component’s template file (HTML), you can use the child component reference to access its properties, methods, and events. For example:
```html
<app-child></app-child>
<button (click)="onButtonClick()">Click me</button>
```
- >In the parent component’s TypeScript file, you can access the child component or element using the reference created with @ViewChild. For example:
```ts
export class ParentComponent {
    @ViewChild(ChildComponent) childComponentRef: ChildComponent;

    onButtonClick() {
        // Access child component's properties or methods
        this.childComponentRef.someProperty = 'New value';
        this.childComponentRef.someMethod();

        // Access child element's properties or methods
        this.childComponentRef.nativeElement.someElementProperty = 'New value';
        this.childComponentRef.nativeElement.someElementMethod();
  }
}
```