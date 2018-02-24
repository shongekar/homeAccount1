import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluffComponent } from './bluff.component';

describe('BluffComponent', () => {
  let component: BluffComponent;
  let fixture: ComponentFixture<BluffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
