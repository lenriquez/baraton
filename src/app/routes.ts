import { CartComponent } from './products/containers/cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProductTreeComponent } from './products/containers/product-tree/product-tree.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductTreeComponent },
  { path: 'cart', component: CartComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
