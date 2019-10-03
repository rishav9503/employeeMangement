import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table'
import {employeeData} from '../employeeData.service'
import { HttpClientModule } from '@angular/common/http'; 
import {MatCardModule} from '@angular/material/card';
import {  ReactiveFormsModule , FormsModule } from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import { FilterPipe} from './filter.pipe';
import {MatTabsModule} from '@angular/material/tabs';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatDividerModule,

  
} from '@angular/material'
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    // NgbModule
  ],
  imports: [
    // NgbModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,



    InMemoryWebApiModule.forRoot(employeeData),
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDividerModule,
    MatCardModule
    


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
