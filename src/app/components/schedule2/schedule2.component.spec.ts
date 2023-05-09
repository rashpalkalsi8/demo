import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Schedule2Component } from './schedule2.component';

describe('Schedule2Component', () => {
  let component: Schedule2Component;
  let fixture: ComponentFixture<Schedule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Schedule2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Schedule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
