import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApidesignerSettingsComponent } from './apidesigner-settings.component';

describe('ApidesignerSettingsComponent', () => {
  let component: ApidesignerSettingsComponent;
  let fixture: ComponentFixture<ApidesignerSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApidesignerSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApidesignerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
