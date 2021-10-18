import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApidesignerComponent } from './apidesigner.component';

describe('ApidesignerComponent', () => {
  let component: ApidesignerComponent;
  let fixture: ComponentFixture<ApidesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApidesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApidesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
