import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerHeaderComponent } from './beer-header.component';

describe('BeerHeaderComponent', () => {
  let component: BeerHeaderComponent;
  let fixture: ComponentFixture<BeerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
