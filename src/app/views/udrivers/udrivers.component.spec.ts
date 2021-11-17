import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdriversComponent } from './udrivers.component';

describe('UdriversComponent', () => {
  let component: UdriversComponent;
  let fixture: ComponentFixture<UdriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
