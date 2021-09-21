import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggereditorComponent } from './swaggereditor.component';

describe('SwaggereditorComponent', () => {
  let component: SwaggereditorComponent;
  let fixture: ComponentFixture<SwaggereditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaggereditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggereditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
