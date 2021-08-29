import { TestBed } from '@angular/core/testing';

import { GeneratorService } from './generator.service';

describe('GeneratorService', () => {
  let service: GeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getLetter', () => {
    it('should return a char between a and j', () => {
      const letter = String.fromCharCode(97 + 0);
      service.getLetter(0);
      expect(letter).toBe('a');
    });
  });

  describe('selectRandomRow', () => {
    it('should return a random row', () => {
      const letter = String.fromCharCode(97 + Math.floor(Math.random() * 10));
      service.selectRandomRow();
      expect(letter).not.toBeUndefined();
    });
  });

  describe('selectRandomColumn', () => {
    it('should return a random col', () => {
      const col = Math.floor(Math.random() * 10);
      service.selectRandomColumn();
      expect(col).toBeGreaterThanOrEqual(0);
    });
  });
});
