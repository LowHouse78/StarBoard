import { Component } from '@angular/core';
import { Menuebar } from '../menuebar/menuebar';  
import { Contentview } from '../contentview/contentview'; 

@Component({
  selector: 'app-overview',
  imports: [Menuebar, Contentview],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class Overview {

}
