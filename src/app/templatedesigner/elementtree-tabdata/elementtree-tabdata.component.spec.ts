import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementtreeTabdataComponent } from './elementtree-tabdata.component';

describe('ElementtreeTabdataComponent', () => {
  let component: ElementtreeTabdataComponent;
  let fixture: ComponentFixture<ElementtreeTabdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementtreeTabdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementtreeTabdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
