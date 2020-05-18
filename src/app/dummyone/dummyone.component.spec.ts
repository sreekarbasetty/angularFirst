import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyoneComponent } from './dummyone.component';

describe('DummyoneComponent', () => {
  let component: DummyoneComponent;
  let fixture: ComponentFixture<DummyoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
