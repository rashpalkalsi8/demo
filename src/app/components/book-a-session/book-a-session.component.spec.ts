import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookASessionComponent } from './book-a-session.component';

describe('BookASessionComponent', () => {
  let component: BookASessionComponent;
  let fixture: ComponentFixture<BookASessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookASessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookASessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
