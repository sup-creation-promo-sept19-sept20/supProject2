import { TestBed, async, inject } from '@angular/core/testing';

import { AlreadyConnectedGuard } from './already-connected.guard';

describe('AlreadyConnectedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlreadyConnectedGuard]
    });
  });

  it('should ...', inject([AlreadyConnectedGuard], (guard: AlreadyConnectedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
