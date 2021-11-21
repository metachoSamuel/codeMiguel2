import { TestBed } from '@angular/core/testing';

import { AudioVisualService } from './audio-visual.service';

describe('AudioVisualService', () => {
  let service: AudioVisualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioVisualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
