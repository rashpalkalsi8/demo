import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmDetailsComponent } from './alarm-details.component';

describe('AlarmDetailsComponent', () => {
  let component: AlarmDetailsComponent;
  let fixture: ComponentFixture<AlarmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
