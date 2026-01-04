import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuebuttonComponent } from '../menuebutton/menuebutton';

@Component({
  selector: 'app-menuebar',
  imports: [MenuebuttonComponent],
  templateUrl: './menuebar.html',
  styleUrl: './menuebar.scss',
})

export class MenuebarComponent {
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
