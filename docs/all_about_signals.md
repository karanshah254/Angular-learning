## What is signal in angular
- > Signal is new way in angular to tell the template that our code/data has been changed.
- >Improves th performance and also makes the code more reactive.
- >Basic use of signal in vanilla-js code is:
```js
const x = signal(5);
const y = signal(3);
const z = computed(() => x() + y());
console.log(z()); // 8

x.set(10);
console.log(z()); // 13
```
- >As per documentation **A signal is a wrapper around a value that notifies interested consumers when that value changes. Signals can contain any value, from primitives to complex data structures.**
- >You read signals by calling its getter functions, which allows angular to track that signals have been used.


### How to create a signal value
- >Signal value can created using signal keyword of angular.
```js
name = signal("John")
surname = signal<string>("doe") // this is strongly typed
```

### How to access signal value
- >Signal value can be accessed as function
```html
{{firstName()}}
```

### How to update the signal value
- >Signal value can be updated using set, update method
```ts
this.variable_name.set('value-to-be-change')
```