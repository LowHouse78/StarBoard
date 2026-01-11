import { Component } from '@angular/core';
import { MenuebarComponentComponent } from '../menuebar-component/menuebar-component';  
import { ContentviewComponent } from '../contentview/contentview'; 

@Component({
  selector: 'app-overview',
  imports: [MenuebarComponentComponent, ContentviewComponent],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class OverviewComponent {

}
