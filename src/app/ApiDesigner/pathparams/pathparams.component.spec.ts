import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathparamsComponent } from './pathparams.component';

describe('PathparamsComponent', () => {
  let component: PathparamsComponent;
  let fixture: ComponentFixture<PathparamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathparamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
