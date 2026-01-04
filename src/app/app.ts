import { Component, signal } from '@angular/core';
import { OverviewComponent } from './components/overview/overview';

@Component({
  selector: 'app-root',
  imports: [OverviewComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('StarBoard');
}
