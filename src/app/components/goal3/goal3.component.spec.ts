import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goal3Component } from './goal3.component';

describe('Goal3Component', () => {
  let component: Goal3Component;
  let fixture: ComponentFixture<Goal3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Goal3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Goal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
