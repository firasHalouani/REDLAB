import { TestBed } from '@angular/core/testing';

import { AllMycomponentService } from './all-mycomponent.service';

describe('AllMycomponentService', () => {
  let service: AllMycomponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllMycomponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
