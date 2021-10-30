import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderparamsComponent } from './headerparams.component';

describe('HeaderparamsComponent', () => {
  let component: HeaderparamsComponent;
  let fixture: ComponentFixture<HeaderparamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderparamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
