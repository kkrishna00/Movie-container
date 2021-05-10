import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMarkPageComponent } from './book-mark-page.component';

describe('BookMarkPageComponent', () => {
  let component: BookMarkPageComponent;
  let fixture: ComponentFixture<BookMarkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookMarkPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMarkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
