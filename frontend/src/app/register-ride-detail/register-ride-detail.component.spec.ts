import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRideDetailComponent } from './register-ride-detail.component';

describe('RegisterRideDetailComponent', () => {
  let component: RegisterRideDetailComponent;
  let fixture: ComponentFixture<RegisterRideDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterRideDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRideDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
