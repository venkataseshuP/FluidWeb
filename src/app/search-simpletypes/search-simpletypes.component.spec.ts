import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSimpletypesComponent } from './search-simpletypes.component';

describe('SearchSimpletypesComponent', () => {
  let component: SearchSimpletypesComponent;
  let fixture: ComponentFixture<SearchSimpletypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSimpletypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSimpletypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
