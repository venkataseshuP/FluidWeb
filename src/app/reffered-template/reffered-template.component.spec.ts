import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferedTemplateComponent } from './reffered-template.component';

describe('RefferedTemplateComponent', () => {
  let component: RefferedTemplateComponent;
  let fixture: ComponentFixture<RefferedTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefferedTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefferedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
