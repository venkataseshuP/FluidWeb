import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiExchangeSettingsComponent } from './api-exchange-settings.component';

describe('ApiExchangeSettingsComponent', () => {
  let component: ApiExchangeSettingsComponent;
  let fixture: ComponentFixture<ApiExchangeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiExchangeSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiExchangeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
