import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementUploadComponent } from './statement-upload.component';

describe('StatementUploadComponent', () => {
  let component: StatementUploadComponent;
  let fixture: ComponentFixture<StatementUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatementUploadComponent]
    });
    fixture = TestBed.createComponent(StatementUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
