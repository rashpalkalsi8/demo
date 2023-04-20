import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskACoachComponent } from './ask-a-coach.component';

describe('AskACoachComponent', () => {
  let component: AskACoachComponent;
  let fixture: ComponentFixture<AskACoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskACoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskACoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
