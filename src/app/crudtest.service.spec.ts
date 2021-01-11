import { TestBed } from '@angular/core/testing';

import { CrudtestService } from './crudtest.service';

describe('CrudtestService', () => {
  let service: CrudtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
