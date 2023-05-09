import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goal4Component } from './goal4.component';

describe('Goal4Component', () => {
  let component: Goal4Component;
  let fixture: ComponentFixture<Goal4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Goal4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Goal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
