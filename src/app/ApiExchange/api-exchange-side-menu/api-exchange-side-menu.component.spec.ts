import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiExchangeSideMenuComponent } from './api-exchange-side-menu.component';

describe('ApiExchangeSideMenuComponent', () => {
  let component: ApiExchangeSideMenuComponent;
  let fixture: ComponentFixture<ApiExchangeSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiExchangeSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiExchangeSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
