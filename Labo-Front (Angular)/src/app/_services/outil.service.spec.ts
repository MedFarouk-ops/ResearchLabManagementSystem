import { TestBed } from '@angular/core/testing';

import { OutilService } from './outil.service';

describe('OutilService', () => {
  let service: OutilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
