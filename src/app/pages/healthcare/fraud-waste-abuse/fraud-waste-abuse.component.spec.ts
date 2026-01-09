import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudWasteAbuseComponent } from './fraud-waste-abuse.component';

describe('FraudWasteAbuseComponent', () => {
  let component: FraudWasteAbuseComponent;
  let fixture: ComponentFixture<FraudWasteAbuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraudWasteAbuseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraudWasteAbuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
