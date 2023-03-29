import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goal1Component } from './goal1.component';

describe('Goal1Component', () => {
  let component: Goal1Component;
  let fixture: ComponentFixture<Goal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Goal1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Goal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
