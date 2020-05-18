import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewtitleComponent } from './reviewtitle.component';

describe('ReviewtitleComponent', () => {
  let component: ReviewtitleComponent;
  let fixture: ComponentFixture<ReviewtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
