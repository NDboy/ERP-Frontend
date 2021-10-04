import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApinvoiceListComponent } from './apinvoice-list.component';

describe('ApinvoiceListComponent', () => {
  let component: ApinvoiceListComponent;
  let fixture: ComponentFixture<ApinvoiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApinvoiceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApinvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
