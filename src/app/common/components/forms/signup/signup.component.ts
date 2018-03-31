import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormDataValidator } from '../../../validators/form-data.validator';

@Component({
  selector: 'db-app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  @Input() playerFirstName: string = '';
  @Input() playerLastName: string = '';
  @Input() playerEmailID: string = '';
  @Input() playerPassword: string = '';
  @Input() playerConfirmPassword: string = '';

  constructor (  ) {  }

  ngOnInit() {
  }

  form = new FormGroup ( {
    firstName: new FormControl('',  [ 
                                    FormDataValidator.noSpace, // Custom validation
                                    Validators.required, // Default validation
                                    FormDataValidator.spacialChars, // Custom validation
                                    Validators.pattern('^[a-zA-Z0-9]+$'), // Default validation
                                    ]),
    lastName: new FormControl('',  [ 
                                    FormDataValidator.noSpace, // Custom validation
                                    Validators.required, // Default validation
                                    FormDataValidator.spacialChars, // Custom validation
                                    Validators.pattern('^[a-zA-Z0-9]+$'), // Default validation
                                    ]),
    email: new FormControl('', [ 
                                  FormDataValidator.noSpace, // Custom validation
                                  Validators.required, // Default validation
                                  Validators.email,
                                 ]), // Default validation
    password: new FormControl('', [
                                    Validators.required,
                                    Validators.minLength(6),
                                    Validators.maxLength(16),
                                  ]), // Default validation
    confirmPassword: new FormControl('', [
                                          Validators.required,
                                          Validators.minLength(6),
                                          Validators.maxLength(16),
                                         ]), // Default validation
  }, this.pwdMatchValidator);

  pwdMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('confirmPassword').value ? null : {'mismatch': true};
  }

  // Getter functions
  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword')
  }

  submitValue(){
    console.log(this.form.get('firstName'));
  }
}
