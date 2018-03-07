import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'db-app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input('borderColor') public borderColor = 'grey';
  @Input('size') public size = 'medium';

  // below values come from database
  profObj = [{userID: '1', name: 'INDU', path: 'assets/ProfileImages/1.png', avatarShape: 'hexagon'},
             {userID: '2', name: 'DIVS', path: 'assets/ProfileImages/2.png', avatarShape: 'parallelogram'},
             {userID: '3', name: 'RAKI', path: 'assets/ProfileImages/3.png', avatarShape: 'pentagon'},
             {userID: '4', name: 'VIJI', path: 'assets/ProfileImages/4.jpg', avatarShape: 'circle-360'},
             {userID: '5', name: 'RAKS', path: 'assets/ProfileImages/5.jpg', avatarShape: 'square'}
 ];

 // returns size in pixel based on large/medium
  public getSize(size: string): string {
    if (size === 'large') {
      return '150px';
    }
    if (size === 'medium') {
        return '100px';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
