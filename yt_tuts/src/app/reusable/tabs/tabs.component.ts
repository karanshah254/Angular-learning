import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  standalone: true,
  templateUrl: './tabs.component.html',
  // styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit {
  @Input() tabList: string[] = [];

  // make call from child to parent
  @Output() onTabChange = new EventEmitter<string>();

  currentTab: string = '';

  // constructor() {
  //   this.currentTab = this.tabList[0];
  // }

  ngOnInit(): void {
      this.currentTab = this.tabList[0];
  }

  onTabClicked(tabName: string) {
    this.currentTab = tabName;
    this.onTabChange.emit(tabName);
  }
}
