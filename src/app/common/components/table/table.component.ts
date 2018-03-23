import { Component, Input } from '@angular/core';

@Component({
  selector: 'db-app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements {
  @Input('tableColor') public tableColor:string = 'blue';

  ngOnInit() {
  }

}
