import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavDriverAreasComponent } from './fav-driver-areas.component';

describe('FavDriverAreasComponent', () => {
  let component: FavDriverAreasComponent;
  let fixture: ComponentFixture<FavDriverAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavDriverAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavDriverAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
