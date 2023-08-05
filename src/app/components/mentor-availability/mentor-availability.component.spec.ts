import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAvailabilityComponent } from './mentor-availability.component';

describe('MentorAvailabilityComponent', () => {
  let component: MentorAvailabilityComponent;
  let fixture: ComponentFixture<MentorAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
