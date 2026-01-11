import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuebuttonComponentComponent } from '../menuebutton-component/menuebutton-component';

@Component({
  selector: 'app-menuebar-component',
  imports: [MenuebuttonComponentComponent],
  templateUrl: './menuebar-component.html',
  styleUrl: './menuebar-component.scss',
})

export class MenuebarComponentComponent {
  constructor(private router: Router) {}

  navigateToOneView() {
    this.router.navigate(['/oneview']);
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
