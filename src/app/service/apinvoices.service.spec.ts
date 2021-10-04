import { TestBed } from '@angular/core/testing';

import { ApinvoicesService } from './apinvoices.service';

describe('ApinvoicesService', () => {
  let service: ApinvoicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApinvoicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
