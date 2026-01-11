import { Component, OnInit } from '@angular/core';
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
  //chart-data
  chartData: any[] = [];
  multi: any[] = [];

  //chart-options
  view: [number, number] = [700, 400];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Image No.';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;
  showRefLines: boolean = true;
  showRefLabels: boolean = true;
  
  // Keine Grid-Linien
  showGridLines: boolean = false;

  refLinesColorScheme = {
    domain: ['#FF0000'] // Rot für Upper, Gelb für Lower
  };

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d']
  };


  referenceLines: DataPoint[] = [
    {
      name: 'Upper Limit',
      value: 80
    },
    {
      name: 'Lower Limit',
      value: 20
    }
  ];

  ngOnInit(): void {
    this.generateRandomData();
  }
  generateRandomData(): void {

    const dataPointsPerSeries = 30; // Datenpunkte pro Linie
    const series: DataPoint[] = [];

    this.multi = [];

    for (let j = 0; j < dataPointsPerSeries; j++) {
      series.push({
        name: `Punkt ${j + 1}`,
        value: Math.floor(Math.random() * 100)
      });
    }

    this.multi.push({
      name: 'Random Data Series',
      series: series
    });
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
