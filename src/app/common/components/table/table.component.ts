import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'db-app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('tableColor') public tableColor:string = 'blue';
  @Input('tableBorder') public tableBorder:string = '10px solid yellow';

  constructor() { }

  ngOnInit() {
  }

}
