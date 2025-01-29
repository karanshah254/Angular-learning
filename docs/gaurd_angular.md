## About Route Gaurds
- >In Angular, guards are special classes used to control and manage access to different parts of an application.
- >They decide whether a user can navigate to a particular route or perform certain actions based on specific conditions, like checking if the user is logged in or has the necessary permissions.
- >Guards act as gatekeepers, allowing or preventing access to different parts of the application, ensuring security and controlling the flow of navigation within the app.

### Types of routes
**1. CanActivate**:
- >Determines if a route can be activated and allows navigation based on certain conditions. Implemented using ```CanActivate``` interface.
- >Use case is Authenticated users.
**2. CanActivateChild**:
- >Similar to CanActivate but controls the activation of child routes. Implemented using ```CanActivateChild``` interface.
- >Use case is admin panel access
**3. CanDeactivate**:
- >Checks if a route can be deactivated, often used to confirm navigation away from a route. Implemented using ```CanDeactivate``` interface.
- >Use case is Preventing unsaved changes
**4. CanLoad**:
- >Prevents a module from being loaded lazily until certain conditions are met. Implemented using ```CanLoad``` interface.
- >Use case: Role based Module learning