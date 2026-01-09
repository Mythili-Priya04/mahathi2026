import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueCycleManagementComponent } from './revenue-cycle-management.component';

describe('RevenueCycleManagementComponent', () => {
  let component: RevenueCycleManagementComponent;
  let fixture: ComponentFixture<RevenueCycleManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueCycleManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueCycleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
