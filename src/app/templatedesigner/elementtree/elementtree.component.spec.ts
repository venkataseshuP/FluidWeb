import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementtreeComponent } from './elementtree.component';

describe('ElementtreeComponent', () => {
  let component: ElementtreeComponent;
  let fixture: ComponentFixture<ElementtreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementtreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
