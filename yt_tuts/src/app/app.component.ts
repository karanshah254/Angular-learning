import { Component } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from "./components/ng-if/ng-if.component";
import { NgForComponent } from "./components/ng-for/ng-for.component";
import { NgClassComponent } from "./components/ng-class/ng-class.component";
import { NgStyleComponent } from "./components/ng-style/ng-style.component";
import { ControlFlowStatementComponent } from "./components/control-flow-statement/control-flow-statement.component";
import { SignalComponent } from "./components/signal/signal.component";
import { LinkedSignalComponent } from "./components/linked-signal/linked-signal.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./components/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  imports: [RouterOutlet]
})
export class AppComponent {
  title = 'yt_tuts';
}
