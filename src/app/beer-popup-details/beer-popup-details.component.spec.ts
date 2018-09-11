import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerPopupDetailsComponent } from './beer-popup-details.component';

describe('BeerPopupDetailsComponent', () => {
  let component: BeerPopupDetailsComponent;
  let fixture: ComponentFixture<BeerPopupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerPopupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerPopupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
