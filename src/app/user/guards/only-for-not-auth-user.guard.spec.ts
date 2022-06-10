import { TestBed } from '@angular/core/testing';

import { OnlyForNotAuthUserGuard } from './only-for-not-auth-user.guard';

describe('OnlyForNotAuthUserGuard', () => {
  let guard: OnlyForNotAuthUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyForNotAuthUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
