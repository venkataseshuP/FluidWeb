import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedesignerComponent } from './templatedesigner.component';

describe('TemplatedesignerComponent', () => {
  let component: TemplatedesignerComponent;
  let fixture: ComponentFixture<TemplatedesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatedesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
