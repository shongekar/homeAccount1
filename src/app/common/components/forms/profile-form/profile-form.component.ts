import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  email = 'abc@gmail.com';
  nickname = 'abc';
  profileObj = {userID: '1', name: 'INDU', path: 'assets/ProfileImages/1.png', avatarShape: 'hexagon'};
  borderColor = 'blue';
  size = 'medium';

  url: any;
  onSelectFile(event:any) 
  { // called each time file input changes
    if (event.target.files && event.target.files[0]) 
    {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event:any) => 
      { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}


// TODO: handle @inputs,
//       image url update, 
//       capture updated values , 
//       function to get nickname from email id,
//       validations to fields 
//       ngIf for hover text profile component