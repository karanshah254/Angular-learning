## About form
- >It is very important part of CRUD application in angular.
- >Types: Template form and Reactive form
- >**ngModel** has been used in this form and **name** attribute is required in each input field.

#### Template Form
- >Small and simple forms
- >Use two way binding and its directive like ngModel, ngForm, etc.
- >Example are : login form, contact form.
- >This form is generally used when to store the things.
- >To validate the template form we use its own directives along with condition.
- >Directives like ngModel, ngIf and ngForm are used for validation.

#### Reactive Form
- >Reactive forms use an explicit and immutable approach to managing the state of a form at a given point in time. Each change to the form state returns a new state, which maintains the integrity of the model between changes. Reactive forms are built around observable streams, where form inputs and values are provided as streams of input values, which can be accessed synchronously.
- >Reactive forms also provide a straightforward path to testing because you are assured that your data is consistent and predictable when requested. Any consumers of the streams have access to manipulate that data safely.
- >Reactive forms provide synchronous access to the data model, immutability with observable operators, and change tracking through observable streams.
- >Reactive forms are genrally used when their us complex data handling and form inputs.
- >Validation in reactive form can be added by using **Validators**  :
```ts
userForm: FormGroup = new FormGroup({
    fName: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
```
- >To implement validation in form use syntax like this:
```html
<div class="text-danger">
    @if(userForm.controls['fName'].errors?.['required'] && userForm.controls['fName'].touched){
        <span>this is required field</span>
    }
</div>
```
- >Concepts of Reactive Form:
    1. FormGroup:
    2. FormControl:
    3. FormBuilder:
    4. Validators