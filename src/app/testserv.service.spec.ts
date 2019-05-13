import { TestBed } from '@angular/core/testing';

import { TestservService } from './testserv.service';

describe('TestservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestservService = TestBed.get(TestservService);
    expect(service).toBeTruthy();
  });
});
