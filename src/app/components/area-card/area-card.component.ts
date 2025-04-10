import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-area-card',
  imports: [],
  templateUrl: './area-card.component.html',
  styleUrl: './area-card.component.scss'
})
export class AreaCardComponent {
  @Input() area: any;
}
