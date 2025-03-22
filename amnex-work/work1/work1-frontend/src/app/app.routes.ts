import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'user-list', pathMatch: 'full' },
    { path: 'user-form', component: UserFormComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'user-form/edit/:srNo', component: UserFormComponent },  // Edit user route
];
