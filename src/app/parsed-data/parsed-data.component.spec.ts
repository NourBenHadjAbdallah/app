import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsedDataComponent } from './parsed-data.component';

describe('ParsedDataComponent', () => {
  let component: ParsedDataComponent;
  let fixture: ComponentFixture<ParsedDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParsedDataComponent]
    });
    fixture = TestBed.createComponent(ParsedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
