import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeleteRiderComponent } from './search-delete-rider.component';

describe('SearchDeleteRiderComponent', () => {
  let component: SearchDeleteRiderComponent;
  let fixture: ComponentFixture<SearchDeleteRiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDeleteRiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeleteRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
