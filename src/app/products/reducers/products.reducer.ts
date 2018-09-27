import { LoadProducts, ProductsActionTypes } from './../actions/products.action';
import { Action } from '@ngrx/store';

export interface State {
  loading: boolean;
  loaded: boolean;
  products: any;
  cart: any;
}

const initialState: State = {
  loading: false,
  loaded: false,
  products: [],
  cart: []
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

    case ProductsActionTypes.AddProductCart: {
      const cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
      const index = cart.findIndex(e => e.id === action.product.id);
      if (index === -1) {
        action.product.amount = 1;
        cart.push(action.product);
      } else {
        cart[index].amount += 1;
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      return {
        ...state,
        cart
      };
    }

    default:
      return {...state };
  }
}
