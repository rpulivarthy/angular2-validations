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
        this.addresses = [new Address("Raama","Pulivarthy",2,3), new Address("Krisha", "Pulivarthy",4,5)];
        console.log(this.addresses);
        this.buildForm();
    }

    
    addAddress() {
        const control = <FormArray>this.addressesForm.controls['addressFGA'];
        control.push(this.buildFormGroup(new Address('','',1,2)));
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
             'lastName':[address.lastName, Validators.required],
             'startEnd': this.buildStartEndMonthGroup(address)
            });
    }

    buildStartEndMonthGroup = (address:Address) : FormGroup =>{
       return this.fb.group({
                 'startMonth':[address.startMonth, Validators.required],
                 'endMonth':[address.endMonth, Validators.required]
             }, {
                 validator: this.specificValueInRule.bind(this)
             });
    }

    specificValueInRule=(startEndGrp:FormGroup):any=>{
        const startMonth = startEndGrp.value.startMonth;
        const endMonth = startEndGrp.value.endMonth;
        if (startMonth && endMonth && startMonth > endMonth ) {
              return {
                monthRule: true
            }
        }
        console.log(startMonth);
        return {
            monthRule: false
        }
    }
}