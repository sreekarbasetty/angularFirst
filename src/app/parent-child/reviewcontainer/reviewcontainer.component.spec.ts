import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewcontainerComponent } from './reviewcontainer.component';

describe('ReviewcontainerComponent', () => {
  let component: ReviewcontainerComponent;
  let fixture: ComponentFixture<ReviewcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
