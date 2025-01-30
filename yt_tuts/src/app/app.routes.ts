import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { ControlFlowStatementComponent } from './components/control-flow-statement/control-flow-statement.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetAPIComponent } from './components/API/get-api/get-api.component';
import { PostApiComponent } from './components/API/post-api/post-api.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';
import { EmployeeComponent } from './components/API/employee/employee.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './gaurd/auth.guard';

export const routes: Routes = [
    // creating routes/URL for my components
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'ng-class',
        component: NgClassComponent
    },
    {
        path: 'signal',
        component: SignalComponent
    },
    {
        path: 'linked-signal',
        component: LinkedSignalComponent
    },
    {
        path: 'control-flow',
        component: ControlFlowStatementComponent
    },
    {
        path: 'template-form',
        component: TemplateFormComponent
    },
    {
        path: 'reactive-form',
        component: ReactiveFormComponent
    },
    {
        path: 'get-api',
        component: GetAPIComponent
    },
    {
        path: 'post-api',
        component: PostApiComponent
    },
    {
        path: 'resource-api',
        component: ResourceApiComponent
    },
    {
        path: 'service-api',
        component: EmployeeComponent
    },
    {
        path: 'life-cycle',
        component: LifeCycleComponent
    },
    {
        path: 'ng-for',
        component: NgForComponent
    },
];
