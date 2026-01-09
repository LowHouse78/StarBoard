import { TestBed } from '@angular/core/testing';

import { MockLiveSessionSettingsService } from './mock-live-session-settings.service';

describe('LiveSessionSettingsService', () => {
  let service: MockLiveSessionSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockLiveSessionSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
