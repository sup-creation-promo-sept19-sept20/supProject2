import { TestBed } from '@angular/core/testing';

import { ErrorsManagerService } from './errors-manager.service';

describe('ErrorsManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorsManagerService = TestBed.get(ErrorsManagerService);
    expect(service).toBeTruthy();
  });
});
