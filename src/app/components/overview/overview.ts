import { Component } from '@angular/core';
import { MenuebarComponent } from '../menuebar/menuebar';  
import { ContentviewComponent } from '../contentview/contentview'; 

@Component({
  selector: 'app-overview',
  imports: [MenuebarComponent, ContentviewComponent],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class OverviewComponent {

}
