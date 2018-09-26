import { Action } from '@ngrx/store';

export enum ProductsActionTypes {
  LoadProducts = 'Load Products',
  LoadProductsSuccess = 'Load Products Success'
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LoadProducts;
}


export class LoadProductsSuccess implements Action {
  readonly type = ProductsActionTypes.LoadProductsSuccess;

  constructor(public payload: any) { }
}
