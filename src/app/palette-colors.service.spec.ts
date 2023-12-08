import { TestBed } from '@angular/core/testing';

import { PaletteColorsService } from './palette-colors.service';

describe('PaletteColorsService', () => {
  let service: PaletteColorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaletteColorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
