import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goal5Component } from './goal5.component';

describe('Goal5Component', () => {
  let component: Goal5Component;
  let fixture: ComponentFixture<Goal5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Goal5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Goal5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
