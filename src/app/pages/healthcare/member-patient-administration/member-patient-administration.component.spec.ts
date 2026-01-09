import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPatientAdministrationComponent } from './member-patient-administration.component';

describe('MemberPatientAdministrationComponent', () => {
  let component: MemberPatientAdministrationComponent;
  let fixture: ComponentFixture<MemberPatientAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberPatientAdministrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberPatientAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
