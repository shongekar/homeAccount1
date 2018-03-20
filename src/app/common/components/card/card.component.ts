import { Component, Input } from '@angular/core';

@Component({
  selector: 'db-app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input ('cardData') public cardData;  // card data

  public getColor(symbol: string): string {
    if  (symbol === 'hearts' || symbol === 'diamonds') {
      return 'red';
      } else {
      return 'black';
      }
    }

}
