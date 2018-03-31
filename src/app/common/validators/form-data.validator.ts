import { AbstractControl, ValidationErrors } from "@angular/forms";

export class FormDataValidator {
    // Validator function to check if the data is number
    static isNumber(control: AbstractControl): ValidationErrors | null {
        if((control.value.match(/\D/) != null)){
            return {isNumber: false};
        }

        return null;
    }

    // Validator function to check if the data contains any spacial character
    static spacialChars(control: AbstractControl): ValidationErrors | null {
        if((control.value.match(/^[a-zA-Z0-9]+$/) === null)){
            return {spacialChars: true};
        }

        return null;
    }

    // Validator function to check if the data has spaces
    static noSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value.match(/\s/) != null)){
            return {noSpace: false};
        }

        return null;
    }

}
