import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormDataValidator } from '../../../validators/form-data.validator';

@Component({
  selector: 'db-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})

export class GameFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getMaxNumberOfPlayers();
    this.getMaxNumberOfCardPacks();
  }

  minimumNumberOfPlayers: number = 2;
  minimumNumberOfCardPacks: number = 1;
  @Input() numberOfPlayers: number = 3;
  @Input() numberOfDecks: number = 1;
  @Input() timeoutValue: number;

  // Array to hold numbers. This will be used to render lists in templates
  arrayOfNumberOfPlayers: number[] = [];
  arrayOfNumberOfDecks: number[] = [];

  form = new FormGroup({
    playerCount: new FormControl('', Validators.required), // Default validation
    deckCount: new FormControl('', Validators.required), // Default validation
    playerTimeout: new FormControl('', [
                                        FormDataValidator.noSpace, // Custom validation
                                        FormDataValidator.isNumber, // Custom validation
                                       ]),
    gameName: new FormControl('', [
                                    FormDataValidator.spacialChars, // Custom validation
                                    Validators.required, // Default validation
                                    Validators.pattern('^[a-zA-Z0-9]+$'), // Default validation
                                  ]),
    gameCode: new FormControl('', [
                                    Validators.required, // Default validation
                                    Validators.pattern('^[a-zA-Z0-9]+$'), // Default validation
                                  ])
  });

  // Getter functions
  get playerCount(){
    return this.form.get('playerCount');
  }

  get playerTimeout(){
    return this.form.get('playerTimeout');
  }

  get deckCount(){
    return this.form.get('deckCount');
  }

  get gameName(){
    return this.form.get('gameName');
  }

  get gameCode(){
    return this.form.get('gameCode');
  }

  // Creating an array to display list of numbers
  getMaxNumberOfPlayers(){
    for (var i = this.minimumNumberOfPlayers; i <= this.numberOfPlayers; i++){
      this.arrayOfNumberOfPlayers.push(i);
    }
  }

  // Creating an array to display list of numbers
  getMaxNumberOfCardPacks(){
    for (var i = this.minimumNumberOfCardPacks; i <= this.numberOfDecks; i++){
      this.arrayOfNumberOfDecks.push(i);
    }
  }

  submitValue(){
    console.log(this.form.get('gameName'));
  }
}
