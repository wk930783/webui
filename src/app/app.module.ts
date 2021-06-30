import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  TestComponentModule } from 'projects/lib/testui/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
