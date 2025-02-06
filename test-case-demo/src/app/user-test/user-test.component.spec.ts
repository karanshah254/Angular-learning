import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestComponent } from './user-test.component';

describe('UserTestComponent', () => {
  let component: UserTestComponent;
  let fixture: ComponentFixture<UserTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTestComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing component name
  it("should component name", () => {
    expect(component.componentName).toBe("user-test");
  });

  // testing component functions
  it("should component functions", () => {
    expect(component.sum()).toBe(100);
  })

  // testing classes of html template
  it("check html template", () => {
    const collections = fixture.nativeElement
    expect(collections.querySelector('div').classList.contains('test-case')).toBe(true)
    expect(collections.querySelector('.user-component').textContent).toContain("it works")
  })
});
