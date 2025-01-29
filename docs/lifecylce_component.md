## Component Lifecycle
- >A component’s lifecycle is the sequence of steps that happen between the component’s creation and its destruction. Each step represents a different part of Angular’s process for rendering components and checking them for updates over time.
- >In your components, you can use lifecycle hooks to run code at different stages of the component’s life. These hooks are methods in your component class. Some hooks work for the entire Angular application and are functions with a callback.
- >A component’s lifecycle is linked to how Angular checks for changes. Angular goes through your application from top to bottom, checking for changes in the template bindings. The lifecycle hooks run during this process. Since Angular visits each component once per check, avoid making more changes while it’s checking.

- >Phases included:
    1. **Creation**: component is instantiated.
    2. **Check detection**: checks the changes in data-bound properties.
    3. **Rendering**: commponent template is rendered or updated.
    4. **Destruction**: component is destroyed and cleaned up.

- >Lifecycle hooks:
    1. **ngOnInit**: used to make API calls.
    2. **ngAfterViewInit**: Method runs after all children have been initialized.
    3. **ngAfterContentInit**: Runs once after nested component have been initialized.
    4. **ngAfterViewChecked**: It is called after every change detection cycle when view has been checked.
    5. **ngAfterContentChecked**: It is called after every change detection cycle when the components content has been checked.