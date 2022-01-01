import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesOfDriverComponent } from './rides-of-driver.component';

describe('RidesOfDriverComponent', () => {
  let component: RidesOfDriverComponent;
  let fixture: ComponentFixture<RidesOfDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RidesOfDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesOfDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
