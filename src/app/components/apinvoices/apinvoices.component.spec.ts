import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApinvoicesComponent } from './apinvoices.component';

describe('ApinvoicesComponent', () => {
  let component: ApinvoicesComponent;
  let fixture: ComponentFixture<ApinvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApinvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
