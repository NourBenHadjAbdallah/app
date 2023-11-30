import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankStatementDataComponent } from './bank-statement-data.component';

describe('BankStatementDataComponent', () => {
  let component: BankStatementDataComponent;
  let fixture: ComponentFixture<BankStatementDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankStatementDataComponent]
    });
    fixture = TestBed.createComponent(BankStatementDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
