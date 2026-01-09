import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceRegulatoryServicesComponent } from './compliance-regulatory-services.component';

describe('ComplianceRegulatoryServicesComponent', () => {
  let component: ComplianceRegulatoryServicesComponent;
  let fixture: ComponentFixture<ComplianceRegulatoryServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplianceRegulatoryServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplianceRegulatoryServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
