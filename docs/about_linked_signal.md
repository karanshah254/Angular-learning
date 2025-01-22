## Linked Signal
- >A Linked Signal is derived from one or more existing Signals. Think of it as a computed property that recalculates its value whenever its dependent Signals change.
- >Sample code: 
```js
const counter = signal<number>(3); // creates a linked signal
const doubleCounter = () => counter() * 2  // double counter is linked signal
```


### Creata s linked signal in angular
1. Use of source and computation
```ts
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
```
2. Along with equal property
**equal** is used to compare two objects.
```ts
user = signal({
    id: 111,
    name: 'John',
})
  
email = linkedSignal({
    source: this.user,
    computation: (user) => `${user.name + user.id}@gmail.com`, // merge the user name and id to form email
    equal: (a: any, b: any) => a.id === b.id // check if the value has changed
})
```

### Property in linked signal
1. **source**: It is used to define source signal to be changed or update.
2. **computation**: It is includes the step for how to update signal value.
3. **equal**: It includes conditonal expression which reflecte the change of value if condition satisfies.