import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverProfielComponent } from './driver-profiel.component';

describe('DriverProfielComponent', () => {
  let component: DriverProfielComponent;
  let fixture: ComponentFixture<DriverProfielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverProfielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverProfielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
