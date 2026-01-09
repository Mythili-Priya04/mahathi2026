import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersCompensiationComponent } from './workers-compensiation.component';

describe('WorkersCompensiationComponent', () => {
  let component: WorkersCompensiationComponent;
  let fixture: ComponentFixture<WorkersCompensiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkersCompensiationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkersCompensiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
