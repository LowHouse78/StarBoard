import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILiveSessionSettingsService } from './api/live-session-settings.service.interface';
import { LiveSessionSettingsParameter } from '../models/livesession-settings-parameter.model';
import { LiveSessionSettingsLimit } from '../models/livesession-settings-limit.model';

@Injectable({
  providedIn: 'root'
})
export class MockLiveSessionSettingsService implements ILiveSessionSettingsService {
  
  constructor(private http: HttpClient) {}

  getSettingsParameters(): Observable<LiveSessionSettingsParameter[]> {
    return this.http.get<LiveSessionSettingsParameter[]>(
      '/assets/mock-data/livesession-parameter.json'
    );
  }

  getSettingsLimits(): Observable<LiveSessionSettingsLimit[]> {
    return this.http.get<LiveSessionSettingsLimit[]>(
      '/assets/mock-data/livesession-parameter-limits.json'
    );
  }
}