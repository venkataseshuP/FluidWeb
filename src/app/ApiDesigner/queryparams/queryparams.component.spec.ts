import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryparamsComponent } from './queryparams.component';

describe('QueryparamsComponent', () => {
  let component: QueryparamsComponent;
  let fixture: ComponentFixture<QueryparamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryparamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
