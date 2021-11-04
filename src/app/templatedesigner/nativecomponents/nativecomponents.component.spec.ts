import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativecomponentsComponent } from './nativecomponents.component';

describe('NativecomponentsComponent', () => {
  let component: NativecomponentsComponent;
  let fixture: ComponentFixture<NativecomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativecomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativecomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
