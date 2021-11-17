import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyDriversComponent } from './verify-drivers.component';

describe('VerifyDriversComponent', () => {
  let component: VerifyDriversComponent;
  let fixture: ComponentFixture<VerifyDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
