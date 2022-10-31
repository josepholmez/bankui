import { TestBed } from '@angular/core/testing';

import { MyAccountService } from './myaccount.service';

describe('UserService', () => {
  let service: MyAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
