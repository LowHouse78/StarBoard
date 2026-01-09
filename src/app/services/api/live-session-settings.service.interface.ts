import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LiveSessionSettingsParameter } from '../../models/livesession-settings-parameter.model';
import { LiveSessionSettingsLimit } from '../../models/livesession-settings-limit.model';

export interface ILiveSessionSettingsService {
  getSettingsParameters(): Observable<LiveSessionSettingsParameter[]>;
  getSettingsLimits(): Observable<LiveSessionSettingsLimit[]>;
}

export const LIVE_SESSION_SETTINGS_SERVICE = new InjectionToken<ILiveSessionSettingsService>(
  'ILiveSessionSettingsService'
);