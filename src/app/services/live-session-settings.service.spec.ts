import { TestBed } from '@angular/core/testing';

import { LiveSessionSettingsService } from './live-session-settings.service';

describe('LiveSessionSettingsService', () => {
  let service: LiveSessionSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveSessionSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
