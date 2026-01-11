import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menuebutton-component',
  imports: [MatButtonModule],
  templateUrl: './menuebutton-component.html',
  styleUrl: './menuebutton-component.scss',
})
export class MenuebuttonComponentComponent {
  @Input() img: string = '';
  @Input() text: string = '';
  @Output() clicked = new EventEmitter<void>();

    onClick() {
    this.clicked.emit();
  }
}
