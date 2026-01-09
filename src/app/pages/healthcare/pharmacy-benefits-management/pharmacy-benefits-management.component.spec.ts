import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyBenefitsManagementComponent } from './pharmacy-benefits-management.component';

describe('PharmacyBenefitsManagementComponent', () => {
  let component: PharmacyBenefitsManagementComponent;
  let fixture: ComponentFixture<PharmacyBenefitsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyBenefitsManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmacyBenefitsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
