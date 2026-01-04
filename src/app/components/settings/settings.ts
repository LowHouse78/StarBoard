import { Component } from '@angular/core';
import { SettingsItemComponent } from '../settings-item/settings-item';


@Component({
  selector: 'app-settings',
  imports: [SettingsItemComponent],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class SettingsComponent {

}
