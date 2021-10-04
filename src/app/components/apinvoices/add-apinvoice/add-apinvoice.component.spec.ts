import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApinvoiceComponent } from './add-apinvoice.component';

describe('AddApinvoiceComponent', () => {
  let component: AddApinvoiceComponent;
  let fixture: ComponentFixture<AddApinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
