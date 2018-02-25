import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playerList: any[] = [
    { 'name': 'Aquaman', position: 'top-left' },
    { 'name': 'Spiderman', position: 'top-center'  },
    { 'name': 'Greenlantern', position: 'top-right' },
    { 'name': 'Superman', position: 'bottom-left' },
    { 'name': 'Batman', position: 'bottom-center' },
    { 'name': 'Joker', position: 'bottom-right'  },
    { 'name': 'HarleyQuin', position: 'left-top' },
    { 'name': 'Skull', position: 'left-bottom' },
    { 'name': 'Flash', position: 'right-top' },
    { 'name': 'Ironman', position: 'right-bottom' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
