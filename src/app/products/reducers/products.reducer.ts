import { LoadProducts, ProductsActionTypes } from './../actions/products.action';
import { Action } from '@ngrx/store';

export interface State {
  loading: boolean;
  loaded: boolean;
  products: any;
}

const initialState: State = {
  loading: false,
  loaded: false,
  products: []
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case ProductsActionTypes.LoadProducts: {
      return {
        ...state,
        loading: false
      };
    }
    case ProductsActionTypes.LoadProductsSuccess: {
      return {
          ...state,
          products: action.payload
        };
    }

    default:
      return {...state };
  }
}
