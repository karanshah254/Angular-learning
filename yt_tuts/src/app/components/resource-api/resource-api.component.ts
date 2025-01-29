import { Component, resource } from '@angular/core';
import { ProgressBarComponent } from "../../reusable/progress-bar/progress-bar.component";
import { TabsComponent } from "../../reusable/tabs/tabs.component";

@Component({
  selector: 'app-resource-api',
  imports: [ProgressBarComponent],
  standalone: true,
  templateUrl: './resource-api.component.html',
  // styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {
  customerTabs: string[] = [
    "Basic Info",
    "Plan Info",
    "Payment Info",
  ]

  // with resource api we use fetch call to execute the api
  userList = resource({
    loader: async () => {
      // api call using fetch method and return the promise
      return await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json() as Promise<any[]>)
    }
  })

  reloadData() {
    this.userList.reload()
  }
}
