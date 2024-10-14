import { TestBed } from '@angular/core/testing';

import { BurgerAndSideMenuStateService } from './burger-and-side-menu-state.service';

describe('BurgerAndSideMenuStateService', () => {
  let service: BurgerAndSideMenuStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgerAndSideMenuStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
