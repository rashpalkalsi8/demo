import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAssessmentComponent } from './self-assessment.component';

describe('SelfAssessmentComponent', () => {
  let component: SelfAssessmentComponent;
  let fixture: ComponentFixture<SelfAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
