import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Connect2Component } from './connect2.component';

describe('Connect2Component', () => {
  let component: Connect2Component;
  let fixture: ComponentFixture<Connect2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Connect2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Connect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
