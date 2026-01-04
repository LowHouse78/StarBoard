import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menuebutton',
  imports: [],
  templateUrl: './menuebutton.html',
  styleUrl: './menuebutton.scss',
})
export class Menuebutton {
  @Input() img: string = '';
  @Input() text: string = '';
  @Output() clicked = new EventEmitter<void>();

    onClick() {
    this.clicked.emit();
  }
}
