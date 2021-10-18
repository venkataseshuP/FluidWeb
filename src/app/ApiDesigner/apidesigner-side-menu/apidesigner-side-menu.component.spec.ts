import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApidesignerSideMenuComponent } from './apidesigner-side-menu.component';

describe('ApidesignerSideMenuComponent', () => {
  let component: ApidesignerSideMenuComponent;
  let fixture: ComponentFixture<ApidesignerSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApidesignerSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApidesignerSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
