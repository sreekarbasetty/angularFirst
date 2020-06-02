import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeAllComponent } from './consume-all.component';

describe('ConsumeAllComponent', () => {
  let component: ConsumeAllComponent;
  let fixture: ComponentFixture<ConsumeAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
