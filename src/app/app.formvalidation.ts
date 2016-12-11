import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'form-validation',
    templateUrl: './app.formvalidation.html'
})

export class FormValidation {
    complexForm: FormGroup;
    ss:Array<string> = ["aa","bb"];

    constructor(fb: FormBuilder) {
        this.complexForm = fb.group({
            'firstName' : [null, Validators.required],
            'lastName': "",
            'gender' : "Female",
            'hiking' : false,
            'running' : false,
            'swimming' : false
        })
    }

    submitForm(value: any){
        console.log(value);
  }

}