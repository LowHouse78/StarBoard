import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-settings-item',
  imports: [MatCheckboxModule, MatInputModule, MatFormFieldModule],
  templateUrl: './settings-item.html',
  styleUrl: './settings-item.scss',
})
export class SettingsItemComponent {

}
