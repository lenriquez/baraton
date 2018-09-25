import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './routes';
import { ProductTreeComponent } from './products/containers/product-tree/product-tree.component';
import { CartComponent } from './products/containers/cart/cart.component';
import { HeaderComponent } from './products/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterFormComponent } from './products/components/filter-form/filter-form.component';
import { TreeComponent } from './products/components/tree/tree.component';

import {
  MatSidenavModule,
  MatIconModule,
  MatNavList,
  MatToolbarModule } from '@angular/material/';

@NgModule({
  declarations: [
    AppComponent,
    ProductTreeComponent,
    CartComponent,
    HeaderComponent,
    MatNavList,
    FilterFormComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
