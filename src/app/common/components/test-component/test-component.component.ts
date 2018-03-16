import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent {

  // Parameters to test profilecomponent
  profileObj = {userID: '1', name: 'INDU', path: 'assets/ProfileImages/1.png', avatarShape: 'hexagon'};
  profileObj1 = {userID: '2', name: 'DIVS', path: 'assets/ProfileImages/1.png', avatarShape: 'parallelogram'};
  profileObj2 = {userID: '3', name: 'SATTY', path: 'assets/ProfileImages/3.png', avatarShape: 'pentagon'};
  borderColor = 'blue'
  size = 'medium'

}
