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
  pwdMinLength: number = 6;
  pwdMaxLength: number = 16;

  form = new FormGroup({password: new FormControl('', [Validators.required,
                                                         Validators.minLength(this.pwdMinLength),
                                                         Validators.maxLength(this.pwdMaxLength),]),
                        confirmPassword: new FormControl('', [Validators.required,
                                                              Validators.minLength(this.pwdMinLength),
                                                              Validators.maxLength(this.pwdMaxLength),]),
                        }, FormDataValidator.pwdMatchValidator);

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

