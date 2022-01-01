import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountAreasComponent } from './discount-areas.component';

describe('DiscountAreasComponent', () => {
  let component: DiscountAreasComponent;
  let fixture: ComponentFixture<DiscountAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
