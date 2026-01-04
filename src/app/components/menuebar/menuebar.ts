import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menuebutton } from '../menuebutton/menuebutton';

@Component({
  selector: 'app-menuebar',
  imports: [Menuebutton],
  templateUrl: './menuebar.html',
  styleUrl: './menuebar.scss',
})

export class Menuebar {
  constructor(private router: Router) {}

  navigateToLiveData() {
    this.router.navigate(['/live-data']);
  }

  navigateToHistoricalData() {
    this.router.navigate(['/historical-data']);
  }

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

  exitApp() {
    // Exit-Logik hier
    console.log('Exit clicked');
  }
}
