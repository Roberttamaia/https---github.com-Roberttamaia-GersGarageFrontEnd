import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePartsComponent } from './vehicle-parts.component';

describe('VehiclePartsComponent', () => {
  let component: VehiclePartsComponent;
  let fixture: ComponentFixture<VehiclePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
