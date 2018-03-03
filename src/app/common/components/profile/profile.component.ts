import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  borderColor = 'grey'; // color same as table border
  size = 'medium';

  // below values comes from database
  profObj = [{userID: '1', name: 'INDU', path: 'http://bootdey.com/img/Content/avatar/avatar3.png', avatarShape: 'hexagon'},
             {userID: '2', name: 'DIVS', path: 'https://avatarfiles.alphacoders.com/115/115265.png', avatarShape: 'parallelogram'},
             {userID: '3', name: 'RAKI', path: 'http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-15.png',
              avatarShape: 'pentagon'},
             {userID: '4', name: 'VIJI',
              path: 'https://images.clipartlogo.com/files/istock/previews/9730/97305655-avatar-icon-of-girl-in-a-wide-brim-felt-hat.jpg',
              avatarShape: 'circle-360'},
             {userID: '5', name: 'RAKS',
              path: 'https://i.pinimg.com/474x/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3--free-avatars-create-your-own-avatar.jpg', 
              avatarShape: 'square'}
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
