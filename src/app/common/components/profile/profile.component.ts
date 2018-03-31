import { Component, Input } from '@angular/core';

@Component({
  selector: 'db-app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  @Input('borderColor') public borderColor:string = 'grey';
  @Input('size') public size:string = 'medium';
  @Input('profileObj') public profileObj;
  @Input('isActive') public isActive: boolean = false;
  @Input('timeout') public timeout: number;

 // returns size in pixel based on large/medium
  public getSize(size: string): string {
    if (size === 'large') {
      return '150px';
    }
    if (size === 'medium') {
        return '100px';
    }
  }

  changeStatus(){
    this.isActive = false;
  }

}
