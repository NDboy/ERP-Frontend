import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDataCellComponent } from './address-data-cell.component';

describe('AddressDataCellComponent', () => {
  let component: AddressDataCellComponent;
  let fixture: ComponentFixture<AddressDataCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDataCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDataCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
