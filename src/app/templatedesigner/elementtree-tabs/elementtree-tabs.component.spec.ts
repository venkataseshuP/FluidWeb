import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementtreeTabsComponent } from './elementtree-tabs.component';

describe('ElementtreeTabsComponent', () => {
  let component: ElementtreeTabsComponent;
  let fixture: ComponentFixture<ElementtreeTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementtreeTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementtreeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
