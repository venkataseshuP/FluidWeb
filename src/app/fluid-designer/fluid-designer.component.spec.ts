import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidDesignerComponent } from './fluid-designer.component';

describe('FluidDesignerComponent', () => {
  let component: FluidDesignerComponent;
  let fixture: ComponentFixture<FluidDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluidDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
