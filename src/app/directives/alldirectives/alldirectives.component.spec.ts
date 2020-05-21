import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldirectivesComponent } from './alldirectives.component';

describe('AlldirectivesComponent', () => {
  let component: AlldirectivesComponent;
  let fixture: ComponentFixture<AlldirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
