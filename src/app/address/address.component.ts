import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Address } from './address.model';

@Component( {
    selector: 'ne-address',
    templateUrl: './address.component.html'

})

export class AddressComponent  implements OnInit {
    @Input('injectedFG') addressForm: FormGroup;

    constructor() {
    }

    ngOnInit() {
        this.addressForm.valueChanges
                        .subscribe(data=>this.onValueChanged(data))
         console.log(this.addressForm);
    }

    onValueChanged=(data?:any):void => {
        if (!this.addressForm) { return; }
        const form = this.addressForm;
        console.log(data);
        // Enabling and disabling
        if (data.firstName.length > 4 && this.addressForm.get('lastName').enabled) {
            this.addressForm.get('lastName').disable();
        }
        else if(data.firstName.length <= 4 && this.addressForm.get('lastName').disabled) {
            this.addressForm.get('lastName').enable();
        }
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors={
        'firstName':'',
        'lastName':''
    }

    validationMessages={
        'firstName':{
            'required':'firstName is required',
            'minlength':'min is 4'
        },
        'lastName':{
            'required':'lastName is required',
            'minlength':'min is 5'
        }
    }
}