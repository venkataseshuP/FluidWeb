import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowDesignerSideMenuComponent } from './flow-designer-side-menu.component';

describe('FlowDesignerSideMenuComponent', () => {
  let component: FlowDesignerSideMenuComponent;
  let fixture: ComponentFixture<FlowDesignerSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowDesignerSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowDesignerSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
