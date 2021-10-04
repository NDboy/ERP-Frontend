import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionDataCellComponent } from './collection-data-cell.component';

describe('CollectionDataCellComponent', () => {
  let component: CollectionDataCellComponent;
  let fixture: ComponentFixture<CollectionDataCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionDataCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionDataCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
