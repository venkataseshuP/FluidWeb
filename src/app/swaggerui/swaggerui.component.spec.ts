import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggeruiComponent } from './swaggerui.component';

describe('SwaggeruiComponent', () => {
  let component: SwaggeruiComponent;
  let fixture: ComponentFixture<SwaggeruiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaggeruiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggeruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
