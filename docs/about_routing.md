## What is routing ?
- >Routing is mechanism used to create URl/routes for switching components rather than rendering component in html file.

### How to create a route?
- >Route can be created by editing app.route.ts file and adding **path** and **component** field to route array
- >Default route can be created by assigning ```path=''```.
```js
export const routes: Routes = [
    {
        path: 'path-name',
        component: component-name
    }
]
```

### What is router outlet ?
- >In Angular, a router-outlet is a directive that acts as a placeholder in a component's template. It's used to dynamically load different components based on the current URL route. Router-outlet is a crucial part of Angular's routing system, enabling you to build single-page applications where different parts of the app can change without reloading the entire page.

### How to implement routing
- >Routing can implemented using **RouterLink** property of angular and adding routerLink='path-name' as property in anchor tag.
```html
<a class="nav-link" routerLink="pathname">Route Name to be shown</a>
```
- >RouterLink is a module that allows users to navigate between views in an application. It's a key feature of Angular's router.


### Use of routing from typescrip file using angular Router
- >Sample code:
```html
<button class="mx-2 my-2 btn btn-success" (click)="goToAdmin()">Go to admin</button>
```
```ts
// Router from angular
constructor(private router: Router) {}
goToAdmin() {
    this.router.navigateByUrl('/admin')
}
```

### Navigation in angular
- > Navigattion can be done in lot ways:
1. Using router link
2. Using function call by adding Router in ts file
3. By using router outlet