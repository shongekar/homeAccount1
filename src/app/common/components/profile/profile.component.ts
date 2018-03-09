import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'db-app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  @Input('borderColor') public borderColor = 'grey';
  @Input('size') public size = 'medium';
  @Input('profileObj') public profileObj;

 // returns size in pixel based on large/medium
  public getSize(size: string): string {
    if (size === 'large') {
      return '150px';
    }
    if (size === 'medium') {
        return '100px';
    }
  }

}
