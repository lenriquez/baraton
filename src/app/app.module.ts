import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { routing } from './routes';
import { ProductTreeComponent } from './products/containers/product-tree/product-tree.component';
import { CartComponent } from './products/containers/cart/cart.component';
import { HeaderComponent } from './products/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterFormComponent } from './products/components/filter-form/filter-form.component';
import { TreeComponent } from './products/components/tree/tree.component';
import { productReducer } from './products/reducers/products.reducer';
import { ProductsEffects } from './products/effects/products.effects';


import {
  MatSidenavModule,
  MatIconModule,
  MatNavList,
  MatInputModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatTreeModule,
  MatCardModule } from '@angular/material/';

@NgModule({
  declarations: [
    AppComponent,
    ProductTreeComponent,
    CartComponent,
    HeaderComponent,
    MatNavList,
    FilterFormComponent,
    TreeComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTreeModule,
    StoreModule.forRoot({ products: productReducer  }),
    EffectsModule.forRoot([ProductsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
