import { TableModule } from 'primeng/table';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ListboxModule} from 'primeng/listbox';
import { NgxCurrencyModule } from "ngx-currency";
import {DropdownModule} from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './layout/app.footer.component';
import { CaskComponent } from './cask/cask.component';
import { UtilModule } from './util/util.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CaskComponent,
    LayoutComponent,
    AppFooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UtilModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,    
    BrowserAnimationsModule,
    AutoCompleteModule,
    ListboxModule,
    NgxCurrencyModule,
    DropdownModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
