import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowStatementComponent } from './control-flow-statement.component';

describe('ControlFlowStatementComponent', () => {
  let component: ControlFlowStatementComponent;
  let fixture: ComponentFixture<ControlFlowStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowStatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
