import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSpinnerComponent } from './timer-spinner.component';

describe('TimerSpinnerComponent', () => {
  let component: TimerSpinnerComponent;
  let fixture: ComponentFixture<TimerSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
