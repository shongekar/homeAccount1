import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  url1 = 'http://bootdey.com/img/Content/avatar/avatar3.png';

  profObj = [{userID: '1', name: 'INDU', path: 'http://bootdey.com/img/Content/avatar/avatar3.png', avatarShape: 'polygon-clip-square1'},
             {userID: '2', name: 'DIVS', path: 'https://avatarfiles.alphacoders.com/115/115265.png', avatarShape: 'polygon-clip-hexagon1'},
             {userID: '3', name: 'RAKI', path: 'http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-15.png',
              avatarShape: 'polygon-clip-rabbet1'},
             {userID: '4', name: 'VIJI',path: 'https://images.clipartlogo.com/files/istock/previews/9730/97305655-avatar-icon-of-girl-in-a-wide-brim-felt-hat.jpg',
              avatarShape: 'polygon-clip-circle1'},
             {userID: '5', name: 'RAKS', path: 'https://i.pinimg.com/474x/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3--free-avatars-create-your-own-avatar.jpg', 
             avatarShape: 'polygon-clip-trapezoid1'}
            ];

  constructor() { }

  ngOnInit() {
  }

}
