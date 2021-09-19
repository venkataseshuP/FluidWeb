import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgassestsComponent } from './svgassests.component';

describe('SvgassestsComponent', () => {
  let component: SvgassestsComponent;
  let fixture: ComponentFixture<SvgassestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgassestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgassestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
