import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerListCardComponent } from './beer-list-card.component';

describe('BeerListCardComponent', () => {
  let component: BeerListCardComponent;
  let fixture: ComponentFixture<BeerListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
