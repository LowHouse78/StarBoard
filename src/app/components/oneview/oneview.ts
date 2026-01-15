import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartComponent } from '../linechart-component/linechart-component';
import { LiveSessionSettingsService } from '../../services/live-session-settings.service';
import { LiveSessionSettingsParameter } from '../../models/livesession-settings-parameter.model';
import { LiveSessionSettingsLimit } from '../../models/livesession-settings-limit.model';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ChartConfig {
  id: string;
  label: string;
  upperLimit: number;
  lowerLimit: number;
  upperLimitLabel: string;
  lowerLimitLabel: string;
}

@Component({
  selector: 'app-oneview',
  imports: [CommonModule,LinechartComponent],
  templateUrl: './oneview.html',
  styleUrl: './oneview.scss',
})
export class Oneview implements OnInit {
  private settingsService = inject(LiveSessionSettingsService);
  
  chartConfigs: ChartConfig[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.loadChartConfigurations();
  }

  private loadChartConfigurations(): void {
    forkJoin({
      parameters: this.settingsService.getSettingsParameters(),
      limits: this.settingsService.getSettingsLimits()
    }).pipe(
      map(({ parameters, limits }) => {
        // Nur enabled Parameter verwenden
        const enabledParams = parameters.filter(p => p.enabled);
        
        // Kombiniere Parameter mit ihren Limits
        return enabledParams.map(param => {
          const limit = limits.find(l => l.parameterId === param.id);
          return {
            id: param.id,
            label: param.parameterLabel,
            upperLimit: limit?.upperLimit ?? 100,
            lowerLimit: limit?.lowerLimit ?? 0,
            upperLimitLabel: limit?.upperLimitLabel ?? 'Max',
            lowerLimitLabel: limit?.lowerLimitLabel ?? 'Min'
          } as ChartConfig;
        });
      })
    ).subscribe({
      next: (configs) => {
        this.chartConfigs = configs;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading chart configurations:', error);
        this.isLoading = false;
      }
    });
  }
}