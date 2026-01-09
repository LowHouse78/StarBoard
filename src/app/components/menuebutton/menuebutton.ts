import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menuebutton',
  imports: [MatButtonModule],
  templateUrl: './menuebutton.html',
  styleUrl: './menuebutton.scss',
})
export class MenuebuttonComponent {
  @Input() img: string = '';
  @Input() text: string = '';
  @Output() clicked = new EventEmitter<void>();

    onClick() {
    this.clicked.emit();
  }
}
