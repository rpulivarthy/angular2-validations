import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Address } from './address.model';

@Component( {
    selector: 'ne-addresses',
    templateUrl: './addresses.component.html'

})  

export class AddressesComponent  implements OnInit {

    addresses: Array<Address>;
    
    public addressesForm: FormGroup;

    constructor(private fb:FormBuilder) {
    }

    ngOnInit() {
        // Get the addresses
        this.addresses = [new Address("Raama","Pulivarthy"), new Address("Krisha", "Pulivarthy")];
        console.log(this.addresses);
        this.buildForm();
    }

    
    addAddress() {
        const control = <FormArray>this.addressesForm.controls['addressFGA'];
        control.push(this.buildFormGroup(new Address('','')));
    }


    buildForm() {
        this.addressesForm = this.fb.group({
            'addressFGA': this.fb.array(this.buildFormGroupArray())
        });
        console.log(this.addressesForm);
    }

    saveForm(frmgrp:any) {
        console.log(frmgrp);    
    }

    buildFormGroupArray = (): FormGroup[] =>  {
        let fgArray = new Array<FormGroup>();
       
        this.addresses.forEach(address => {
            fgArray.push(this.buildFormGroup(address));
             console.log(fgArray);
        });
        return fgArray;
    }

    buildFormGroup = (address:Address) : FormGroup => {
        return this.fb.group({
             'firstName':[address.firstName, Validators.required],
             'lastName':[address.lastName, Validators.required]
            });
    } 
}