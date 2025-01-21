## About Data Binding
- >Data binding in Angular is a mechanism that automatically synchronizes data between the model and the view of a web application

### Assign variables in class
- >Class has constructor which is been used to use the variable by using this keyword.

### Types of data binding
**1. One way data binding**: Data flows in single direction.
- >Interpolation : Uses {{variable_name}} to render the data. Component -> View
- >Property Binding: [property-name]="variable_name". Component -> View
- >Event binding: Sample code: ```html <button (click)="showWelcomeMessage()">Event binding button</button>```. Mostly we use (click) or (change) event for event binding. View -> Component.

**2. Two way data binding**:
- >Combines both property and event binding.
- >Allows the input field to update the username property in the component, and any changes to username are reflected in the input field.
- >Using **ngModel** directive and importing **FormsModule** from angular/forms we can use it for two way binding.
- >Immediate changes to view and component will be reflected automatically.