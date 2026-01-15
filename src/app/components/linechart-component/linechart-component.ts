import { Component, Input, OnInit} from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';


interface DataPoint {
  name: string;
  value: number;
}

@Component({
  selector: 'app-linechart-component',
  imports: [NgxChartsModule],
  templateUrl: './linechart-component.html',
  styleUrl: './linechart-component.scss',
})


export class LinechartComponent implements OnInit {
  @Input() chartId!: string;
  @Input() title!: string;
  @Input() upperLimit!: number;
  @Input() lowerLimit!: number;
  @Input() upperLimitLabel!: string;
  @Input() lowerLimitLabel!: string;

  // Chart-Daten
  chartData: any[] = [];

  // Chart Optionen
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Zeit';
  showYAxisLabel = true;
  yAxisLabel = 'Wert';
  timeline = true;
  autoScale = false;
  showGridLines = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d']
  };

  // Reference Lines
  referenceLines: any[] = [];
  showRefLines = true;
  showRefLabels = true;

  ngOnInit(): void {
    this.initializeChart();
  }
  
  private initializeChart(): void {
    console.log(`Initialisiere Chart: ${this.title}`);
    console.log(`Y-Achse: ${this.lowerLimit} (${this.lowerLimitLabel}) - ${this.upperLimit} (${this.upperLimitLabel})`);
    
    // Dummy-Daten generieren (später durch echte Daten ersetzen)
    this.chartData = this.generateDummyData();
    
    // Reference Lines für Upper/Lower Limits
    this.referenceLines = [
      {
        name: this.upperLimitLabel,
        value: this.upperLimit
      },
      {
        name: this.lowerLimitLabel,
        value: this.lowerLimit
      }
    ];
  }

  private generateDummyData(): any[] {
    const series: DataPoint[] = [];
    const now = new Date();
    const range = this.upperLimit - this.lowerLimit;
    
    for (let i = 0; i < 20; i++) {
      const date = new Date(now.getTime() - (20 - i) * 60000); // 20 Minuten zurück
      const randomValue = this.lowerLimit + Math.random() * range;
      series.push({
        name: date.toISOString(),
        value: randomValue
      });
    }
    
    return [{
      name: this.title,
      series: series
    }];
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
