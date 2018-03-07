import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // borderColor = 'grey'; // color same as table border
  // size = 'medium';

  // tslint:disable-next-line:no-input-rename
  @Input('borderColor') public borderColor = 'grey';
  @Input('size') public size = 'medium';

  // below values comes from database
  profObj = [
    // {userID: '1', name: 'INDU', path: 'assets/ProfileImages/1.png', avatarShape: 'hexagon', currentPlayer: true},
  //            {userID: '2', name: 'DIVS', path: 'assets/ProfileImages/2.png', avatarShape: 'parallelogram', currentPlayer: false},
             {userID: '3', name: 'RAKI', path: 'assets/ProfileImages/3.png', avatarShape: 'pentagon', currentPlayer: false},
            //  {userID: '4', name: 'VIJI', path: 'assets/ProfileImages/4.jpg', avatarShape: 'circle-360', currentPlayer: false},
            //  {userID: '5', name: 'RAKS', path: 'assets/ProfileImages/5.jpg', avatarShape: 'square', currentPlayer: false}
 ];

 // returns size in pixel based on large/medium/
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
