import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  standalone: true,
  templateUrl: './life-cycle.component.html',
  // styleUrl: './life-cycle.component.css'
})

// after implements all are life cycle hooks/ events, each hook has its own method
export class LifeCycleComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  // by-default constructor is called first
  constructor() {
    console.log('constructor');
  }

  // as we inherit we need to implement the ngOnInit method
  ngOnInit(): void {
    console.log('ngOnInit');
    // or API call functions can be written here
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    // viewchild, getting referenced of element.
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // after moving from this component to another component, this method will be called
  ngOnDestroy(): void {
    // code to be written when moving from this component to another one.
    console.log('ngOnDestroy');
  }
}


// Life cycle hooks are called in the following order:
// constructor
// ngOnInit
// ngAfterContentInit
// ngAfterContentChecked
// ngAfterViewInit
// ngAfterViewChecked
// ngOnDestroy - when we move from this component to another component