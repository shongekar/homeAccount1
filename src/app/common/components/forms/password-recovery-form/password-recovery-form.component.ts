import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { element } from 'protractor';
import { FormControl, FormGroup, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { FormDataValidator } from '../../../validators/form-data.validator';

@Component({
  selector: 'db-password-recovery-form',
  templateUrl: './password-recovery-form.component.html',
  styleUrls: ['./password-recovery-form.component.css']
})
export class PasswordRecoveryFormComponent{

  @Input('email') public email:string;

  form = new FormGroup({password: new FormControl('', [Validators.required,
                                                         Validators.minLength(6),
                                                         Validators.maxLength(16),]),
                        confirmPassword: new FormControl('', [Validators.required,
                                                              Validators.minLength(6),
                                                              Validators.maxLength(16),]),
                        }, this.pwdMatchValidator);

pwdMatchValidator(frm: FormGroup) {
    var password = frm.get('password').value;
    var confirmPassword = frm.get('confirmPassword').value;
    if(password != confirmPassword) {
      console.log('false');
      frm.get('confirmPassword').setErrors( {MatchPassword: true} )}
      else {
        console.log('true');
        return null}}

get password() {
  return this.form.get('password');
}

get confirmPassword() {
  return this.form.get('confirmPassword')
}

submitValue(){
  console.log(this.form.get('password'));
}

}

