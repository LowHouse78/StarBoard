import { Component } from '@angular/core';
import { SettingsItemComponentComponent } from '../settings-item-component/settings-item-component';


@Component({
  selector: 'app-settingsview',
  imports: [SettingsItemComponentComponent],
  templateUrl: './settingsview.html',
  styleUrl: './settingsview.scss',
})
export class SettingsviewComponent {

}
