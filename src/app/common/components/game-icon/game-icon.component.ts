import { Component, Input } from '@angular/core';

@Component({
  selector: 'db-app-game-icon',
  templateUrl: './game-icon.component.html',
  styleUrls: ['./game-icon.component.css']
})
export class GameIconComponent {
  @Input() link: string;
  @Input() gameImage: string;
}
