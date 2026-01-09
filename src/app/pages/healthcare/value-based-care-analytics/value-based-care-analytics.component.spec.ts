import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueBasedCareAnalyticsComponent } from './value-based-care-analytics.component';

describe('ValueBasedCareAnalyticsComponent', () => {
  let component: ValueBasedCareAnalyticsComponent;
  let fixture: ComponentFixture<ValueBasedCareAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueBasedCareAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueBasedCareAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
