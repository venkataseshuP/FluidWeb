import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowDesignerSettingsComponent } from './flow-designer-settings.component';

describe('FlowDesignerSettingsComponent', () => {
  let component: FlowDesignerSettingsComponent;
  let fixture: ComponentFixture<FlowDesignerSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowDesignerSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowDesignerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
