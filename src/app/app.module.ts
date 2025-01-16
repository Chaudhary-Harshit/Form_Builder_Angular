import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';         
import { FormBuilderComponent } from './form-builder/form-builder.component';  

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppComponent,             
    FormBuilderComponent      
  ],
  bootstrap: [AppComponent],  
})
export class AppModule { }
