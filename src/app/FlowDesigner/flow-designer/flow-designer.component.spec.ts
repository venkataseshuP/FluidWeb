import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowDesignerComponent } from './flow-designer.component';

describe('FlowDesignerComponent', () => {
  let component: FlowDesignerComponent;
  let fixture: ComponentFixture<FlowDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
