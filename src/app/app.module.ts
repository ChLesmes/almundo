import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel/hotel-list.component';
import { HotelItemComponent } from './hotel/hotel-item.component';
import { FilterFormComponent } from './filter/filter-form.component';

// Material angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    HotelItemComponent,
    FilterFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    ReactiveFormsModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
