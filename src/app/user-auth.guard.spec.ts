import { TestBed } from '@angular/core/testing';

import { UserAuthGuard } from './user-auth.guard';

describe('SellerAuthGuard', () => {
  let guard: UserAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
