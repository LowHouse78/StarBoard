import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LIVE_SESSION_SETTINGS_SERVICE } from './api/live-session-settings.service.interface';
import { LiveSessionSettingsParameter } from '../models/livesession-settings-parameter.model';
import { LiveSessionSettingsLimit } from '../models/livesession-settings-limit.model';

@Injectable({
  providedIn: 'root'
})
export class LiveSessionSettingsService {
  private apiService = inject(LIVE_SESSION_SETTINGS_SERVICE);

  getSettingsParameters(): Observable<LiveSessionSettingsParameter[]> {
    return this.apiService.getSettingsParameters();
  }

  getSettingsLimits(): Observable<LiveSessionSettingsLimit[]> {
    return this.apiService.getSettingsLimits();
  }
}