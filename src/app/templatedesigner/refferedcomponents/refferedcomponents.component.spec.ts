import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferedcomponentsComponent } from './refferedcomponents.component';

describe('RefferedcomponentsComponent', () => {
  let component: RefferedcomponentsComponent;
  let fixture: ComponentFixture<RefferedcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefferedcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefferedcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
