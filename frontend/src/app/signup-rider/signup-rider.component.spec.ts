import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRiderComponent } from './signup-rider.component';

describe('SignupRiderComponent', () => {
  let component: SignupRiderComponent;
  let fixture: ComponentFixture<SignupRiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupRiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
