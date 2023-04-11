import { TestBed } from '@angular/core/testing';

import { LoginServiceService } from './login-service.service';

describe('SellerServiceService', () => {
  let service: LoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
