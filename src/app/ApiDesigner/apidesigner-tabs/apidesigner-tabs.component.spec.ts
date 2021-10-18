import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApidesignerTabsComponent } from './apidesigner-tabs.component';

describe('ApidesignerTabsComponent', () => {
  let component: ApidesignerTabsComponent;
  let fixture: ComponentFixture<ApidesignerTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApidesignerTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApidesignerTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
