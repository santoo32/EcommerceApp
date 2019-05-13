import { TestBed } from '@angular/core/testing';

import { ProducproviderService } from './producprovider.service';

describe('ProducproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProducproviderService = TestBed.get(ProducproviderService);
    expect(service).toBeTruthy();
  });
});
