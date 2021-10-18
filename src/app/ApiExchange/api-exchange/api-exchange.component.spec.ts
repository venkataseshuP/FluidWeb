import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiExchangeComponent } from './api-exchange.component';

describe('ApiExchangeComponent', () => {
  let component: ApiExchangeComponent;
  let fixture: ComponentFixture<ApiExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
