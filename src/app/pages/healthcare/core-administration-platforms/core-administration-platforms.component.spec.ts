import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAdministrationPlatformsComponent } from './core-administration-platforms.component';

describe('CoreAdministrationPlatformsComponent', () => {
  let component: CoreAdministrationPlatformsComponent;
  let fixture: ComponentFixture<CoreAdministrationPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreAdministrationPlatformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreAdministrationPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
