import { MaterialModule } from '@angular/material'; 
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HomeComponent }  from './home/home.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    MaterialModule.forRoot()
  ],
  declarations: [ HomeComponent ],
  bootstrap:    [ HomeComponent ]
})
export class AppModule { }
