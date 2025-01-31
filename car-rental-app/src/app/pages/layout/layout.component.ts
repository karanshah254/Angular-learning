import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  @ViewChild("searchText") searchText: ElementRef | undefined;

  masterService = inject(MasterService)

  constructor() {
    this.masterService.searchData.subscribe((result: string) => {
      if (result === '') {
        if (this.searchText) {
          this.searchText.nativeElement['value'] = "";
        }
      }
    })
  }

  onChange(event: any) {
    // debugger;
    this.masterService.searchData.next(event.target.value)
  }
}
