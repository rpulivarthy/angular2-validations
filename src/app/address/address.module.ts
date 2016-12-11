import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

import { AddressesComponent } from './addresses.component';
import { AddressComponent } from './address.component';

@NgModule({
  imports:      [ ReactiveFormsModule, CommonModule ],
  declarations: [ AddressesComponent, AddressComponent],
  exports:      [ AddressesComponent, AddressComponent]
})
export class AddressModule { }