import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApitabdataComponent } from './apitabdata.component';

describe('ApitabdataComponent', () => {
  let component: ApitabdataComponent;
  let fixture: ComponentFixture<ApitabdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApitabdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApitabdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
