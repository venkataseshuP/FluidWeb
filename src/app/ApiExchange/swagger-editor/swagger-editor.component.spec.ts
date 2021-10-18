import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerEditorComponent } from './swagger-editor.component';

describe('SwaggerEditorComponent', () => {
  let component: SwaggerEditorComponent;
  let fixture: ComponentFixture<SwaggerEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaggerEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
