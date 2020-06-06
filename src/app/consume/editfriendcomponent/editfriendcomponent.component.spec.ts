import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfriendcomponentComponent } from './editfriendcomponent.component';

describe('EditfriendcomponentComponent', () => {
  let component: EditfriendcomponentComponent;
  let fixture: ComponentFixture<EditfriendcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfriendcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfriendcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
