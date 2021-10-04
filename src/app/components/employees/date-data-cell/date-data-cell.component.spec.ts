import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDataCellComponent } from './date-data-cell.component';

describe('DateDataCellComponent', () => {
  let component: DateDataCellComponent;
  let fixture: ComponentFixture<DateDataCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateDataCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDataCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
