import { Component, OnInit, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { element } from 'protractor';
import { FormControl, FormGroup, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { FormDataValidator } from '../../../validators/form-data.validator';

@Component({
  selector: 'app-password-recovery-form',
  templateUrl: './password-recovery-form.component.html',
  styleUrls: ['./password-recovery-form.component.css']
})
export class PasswordRecoveryFormComponent{

  maxLength:number = 15;
  minLength:number = 8;
  
  @Input('email') public email:string = 'test@gmail.com';
  form = new FormGroup({
    password: new FormControl('', [Validators.required, // Default validation
                                  ]),

    confirmPassword: new FormControl('', [Validators.required, // Default validation
                                          FormDataValidator.MatchPassword
                                         ]), 
  });

  // form: FormGroup;
  // password = new FormControl("", [Validators.required]);
  // confirmPassword = new FormControl("", [Validators.required, this.validatePasswordConfirmation]);


  // constructor(private fb: FormBuilder) {
  // }
  // ngOnInit() {
  //   this.form = this.fb.group({
  //     "password": this.password,
  //     "confirmPassword": this.confirmPassword
  //   },
  //   {
  //     validator: this.validatePasswordConfirmation
  //   });
  // }

  // validatePasswordConfirmation(group: FormGroup) {
  //   var pw = group.controls['password'];
  //   var pw2 = group.controls['passwordConfirm'];

  //   if (pw.value !== pw2.value) { // this is the trick
  //     pw2.setErrors({validatePasswordConfirmation: true});
  //   }

  //   // even though there was an error, we still return null
  //   // since the new error state was set on the individual field
  //   return null; 
  // }
}
