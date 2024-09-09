import { TestBed } from '@angular/core/testing';

import { CvcSideMenuService } from './cvc-side-menu.service';

describe('CvcSideMenuService', () => {
  let service: CvcSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvcSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
