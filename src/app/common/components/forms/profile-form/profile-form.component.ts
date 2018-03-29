import { Component, OnInit, Input } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormDataValidator } from '../../../validators/form-data.validator';
import { element } from 'protractor';


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  @Input() email: string = 'abc@gmail.com';
  @Input() nickname: any = 'abc';
  @Input() firstName: string = 'Dabba';
  @Input() lastName: string = 'Baba';
  @Input() profileObj = {userID: '1', name: 'INDU', path: 'assets/ProfileImages/1.png', avatarShape: 'hexagon'};
  @Input() borderColor = 'blue';
  @Input() size = 'medium';

  // favoriteGames: any = ['game1', 'game2', 'game3'];
  @Input() favoriteCardGame: any = ['game1', 'game2', 'game3'];

  //  // Array to hold favorite card games. This will be used to render lists in templates
  //  arrayOffavoriteCardGame: any = [];

  //  // Creating an array to display list of numbers
  //  getfavoriteCardGames(){
  //   for (var element = this.favoriteCardGame; element <= this.favoriteCardGame; element++){
  //     this.arrayOffavoriteCardGame.push(element);
  //   }
  // }

  submitValue(){
    console.log(this.form.value);
  }

  form = new FormGroup({
    favoriteCardGames: new FormControl(), // Default validation
    firstName: new FormControl('', [
                                    FormDataValidator.spacialChars, // Custom validation
                                    Validators.required, // Default validation
                                    Validators.pattern('^[a-zA-Z0-9]+$'), // Default validation
                                  ]),
    lastName: new FormControl('', [
                                    FormDataValidator.spacialChars, // Custom validation
                                    Validators.required, // Default validation
                                    Validators.pattern('^[a-zA-Z0-9]+$'), // Default validation
                                  ]),
    nickName: new FormControl('', [
                                    Validators.required, // Default validation
                                    Validators.pattern('^[a-zA-Z0-9]+$'), // Default validation
                                  ])
  });

  //  // Getter functions
  //  get favoriteCardGames(){
  //   return this.form.get('favoriteCardGames');
  // }

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
    // this.getfavoriteCardGames();
  }

}


// TODO: handle @inputs,
//       image url update, 
//       capture updated values , 
//       function to get nickname from email id,
//       validations to fields 
//       ngIf for hover text profile component