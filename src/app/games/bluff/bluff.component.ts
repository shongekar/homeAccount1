import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bluff',
  templateUrl: './bluff.component.html',
  styleUrls: ['./bluff.component.css']
})
export class BluffComponent implements OnInit {

  startOneMoreTImer = false;
  constructor() { }

  ngOnInit() {
  }

  callMyFunction(){
    console.log('Time is up!');
    this.startOneMoreTImer = true;
  }

}
