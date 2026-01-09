import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalAiEnablementComponent } from './digital-ai-enablement.component';

describe('DigitalAiEnablementComponent', () => {
  let component: DigitalAiEnablementComponent;
  let fixture: ComponentFixture<DigitalAiEnablementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalAiEnablementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalAiEnablementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
