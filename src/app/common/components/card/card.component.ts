import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'db-app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input ('rank') public rank: string = 'A';   // card value
  @Input ('suit') public suit = 'spades'; // card symbols

  public getColor(symbol: string): string {
    if  (symbol === 'hearts' || symbol === 'diamonds') {
    return 'red';
    } else {
    return 'black';
    }
  }

}