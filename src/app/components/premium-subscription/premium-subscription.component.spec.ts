import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumSubscriptionComponent } from './premium-subscription.component';

describe('PremiumSubscriptionComponent', () => {
  let component: PremiumSubscriptionComponent;
  let fixture: ComponentFixture<PremiumSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
