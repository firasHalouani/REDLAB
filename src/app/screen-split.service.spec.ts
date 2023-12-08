import { TestBed } from '@angular/core/testing';

import { ScreenSplitService } from './screen-split.service';

describe('ScreenSplitService', () => {
  let service: ScreenSplitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenSplitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
