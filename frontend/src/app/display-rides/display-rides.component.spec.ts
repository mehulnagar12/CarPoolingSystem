import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRidesComponent } from './display-rides.component';

describe('DisplayRidesComponent', () => {
  let component: DisplayRidesComponent;
  let fixture: ComponentFixture<DisplayRidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
