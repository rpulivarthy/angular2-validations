import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Address } from './address.model';

@Component( {
    selector: 'ne-address',
    templateUrl: './address.component.html'

})

export class AddressComponent  implements OnInit {
    @Input('injectedFG') addressForm: FormGroup;
    startEnd:FormGroup;

    constructor() {
    }

    ngOnInit() {
        this.startEnd= <FormGroup>this.addressForm.get("startEnd");
        this.addressForm.valueChanges
                        .subscribe(data=>this.onValueChanged(data))
        
        console.log(this.addressForm);
    }

    onValueChanged=(data?:any):void => {
     //   console.log(data);
        if (!this.addressForm) { return; }
        if (!this.startEnd) {return;}
        const form = this.addressForm;
        const form1 = this.startEnd;
        //console.log(data);
        // Enabling and disabling
        if (data.firstName.length > 4 && this.addressForm.get('lastName').enabled) {
            this.addressForm.get('lastName').disable();
        }
        else if(data.firstName.length <= 4 && this.addressForm.get('lastName').disabled) {
            this.addressForm.get('lastName').enable();
        }


       
            for (const field in this.formErrors) {
                //console.log(field);
                this.formErrors[field] = '';
                const control = form1.get(field);
                if (control) {
                    for(const k in form1.errors) {
                        if(form1.errors[k]) {
                            control.setErrors(form1.errors);
                        }
                    }                   
                    if ( control.dirty && !control.valid) {
                        const messages = this.validationMessages[field];
                        for (const key in control.errors) {
                            console.log(key);
                            console.log(messages[key]); 
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    } 
                }
            }
        
        // form1 has errors 

        // for (const field in this.formErrors) {
            
        //     this.formErrors[field] = '';
        //     const control = form.get(field);
        //     if (control && control.dirty && !control.valid) {
        //         const messages = this.validationMessages[field];
        //         for (const key in control.errors) {
        //     //        console.log(key);
        //             this.formErrors[field] += messages[key] + ' ';
        //         }
        //     }
        // }
    }

    formErrors={
        'firstName':'',
        'lastName':'',
        'startMonth':'',
        'endMonth':''
    }

    validationMessages={
        'firstName':{
            'required':'firstName is required',
            'minlength':'min is 4'
        },
        'lastName':{
            'required':'lastName is required',
            'minlength':'min is 5'
        },
        'startMonth':{
            'required':'Start Month is required',
            'monthRule':'Start Month should be less than end Month'
        },
        'endMonth':{
            'required':'End Month is required',
            'monthRule':'Start Month should be less than end Month'
        }
    }
}