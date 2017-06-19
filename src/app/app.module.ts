import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DatePickerModule } from 'ng2-datepicker';
import { DatePicker } from './date-picker.component';

import {
  OnChangesParentComponent,
  OnChangesComponent
  } from './onchange.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    DatePicker
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
