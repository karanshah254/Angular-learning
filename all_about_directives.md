## About directive
- >Directives in Angular are functions that add custom behavior to HTML elements. They are used to extend the capabilities of HTML by manipulating the DOM. 

### Types of directives
1. Component directives: Used with a template, this is the most common type of directive.
2. Attribute directives: Change the appearance or behavior of an element, component, or another directive. Example **ngClass** and **ngStyle**.
3. Structural directives: Change the DOM layout by adding, removing, or modifying elements. Example: **ngIf** and **ngFor**.

### Examples of structural directives
1. ngFor: Repeats a template for each item in a list. It requires array. Sample code: ```<li *ngFor="let state of variable_name>{{state}}</li>```
2. ngIf: Adds or removes an element from the DOM based on a condition. It requires true/false or conditional values. Sample code: ```<button *ngIf="declared_variable">show/hide</button>```.
3. ngClass: The NgClass directive allows us to conditionally apply CSS classes to HTML elements. Sample code: ```<div class="col-3" [ngClass]="div1BgColor"></div>```

**You can also define your own custom directive**