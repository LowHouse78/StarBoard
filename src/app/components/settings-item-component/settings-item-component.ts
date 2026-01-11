import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LiveSessionSettingsService } from '../../services/live-session-settings.service';
import { LiveSessionSettingsParameter } from '../../models/livesession-settings-parameter.model';
import { LiveSessionSettingsLimit } from '../../models/livesession-settings-limit.model';

@Component({
  selector: 'app-settings-item-component',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule],
  templateUrl: './settings-item-component.html',
  styleUrl: './settings-item-component.scss'
})
export class SettingsItemComponentComponent implements OnInit {
  parameters = signal<LiveSessionSettingsParameter[]>([]);
  limits = signal<LiveSessionSettingsLimit[]>([]);
  
  constructor(private settingsService: LiveSessionSettingsService) {}

  ngOnInit(): void {
    this.loadSettings();
  }

  private loadSettings(): void {
    this.settingsService.getSettingsParameters().subscribe({
      next: (params) => this.parameters.set(params),
      error: (err) => console.error('Error loading parameters:', err)
    });

    this.settingsService.getSettingsLimits().subscribe({
      next: (limits) => this.limits.set(limits),
      error: (err) => console.error('Error loading limits:', err)
    });
  }

  getLimitsForParameter(parameterId: string): LiveSessionSettingsLimit | undefined {
    return this.limits().find(limit => limit.parameterId === parameterId);
  }
}