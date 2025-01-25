## Resource API
- >The Resource API allows you to manage asynchronous data flows directly within angular system.
- >We will use fetch method of javascript to make api call.
- >Sample code:
```ts
userList = resource({
    // The loader function asynchronously fetches user data based on parameters.
    loader: () => {
        // api call using fetch method and return the promise
        return fetch('https://jsonplaceholder.typicode.com/users12').then((res) => res.json() as Promise<any[]>)
    }
})
```