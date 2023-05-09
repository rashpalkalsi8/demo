import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goal2Component } from './goal2.component';

describe('Goal2Component', () => {
  let component: Goal2Component;
  let fixture: ComponentFixture<Goal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Goal2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Goal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
