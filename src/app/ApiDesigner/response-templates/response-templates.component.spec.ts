import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseTemplatesComponent } from './response-templates.component';

describe('ResponseTemplatesComponent', () => {
  let component: ResponseTemplatesComponent;
  let fixture: ComponentFixture<ResponseTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
