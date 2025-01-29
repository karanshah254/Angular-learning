## About PIPES
- >Pipes in Angular are a feature that allow you to transform data in your application before displaying it to the user.
- >Pipes are used to format, filter, and sort data and they can be used with both template-driven and reactive forms, as well as with other Angular components and services.

### Types in pipes:
**1. Pure Pipes:**
- >Pure pipes are designed to be stateless, meaning that they don’t have any internal state that could affect their output.
- >Instead, they take input data and return transformed output data. Pure pipes are also memoized, which means that if the input data hasn’t changed since the last time the pipe was called, the pipe won’t be executed again.
- >The benefit of using pure pipes is that they can help improve the performance of your Angular application, since they only execute when necessary. Additionally, pure pipes can help prevent unnecessary change detection cycles, which can improve overall application performance.
```ts
@Pipe({
    name: 'pure-pipe'.
    pure: true
})
```
**2. Impure Pipes:**
- >Impure pipes can be useful in some cases, such as when you need to perform a heavy calculation or retrieve data from an external API.

### Create a custom pipe from angular CLI
- >It can be created using command:
```ng generate pipe <pipe-name>```