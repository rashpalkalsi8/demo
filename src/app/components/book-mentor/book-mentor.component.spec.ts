import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMentorComponent } from './book-mentor.component';

describe('BookMentorComponent', () => {
  let component: BookMentorComponent;
  let fixture: ComponentFixture<BookMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookMentorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
