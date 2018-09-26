import { LoadProducts, ProductsActionTypes, LoadProductsSuccess } from './../actions/products.action';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { map, switchMap} from 'rxjs/operators';

@Injectable()
export class ProductsEffects {
  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(ProductsActionTypes.LoadProducts),
    switchMap(() => {
      const categories = this.http.get('/assets/categories.json');
      const products = this.http.get('/assets/products.json');

      return forkJoin([categories, products]).pipe(map((results: any) => {
          const queue = results[0].categories.slice();

          for (let i = 0; i < queue.length; i++) {
            const e = queue[i];
            if ( e.sublevels) { e.sublevels.forEach(n => queue.push(n)); }
            e.children = e.sublevels || [];
            const pf = results[1].products.filter(p => p.sublevel_id === e.id);
            e.children = e.children.concat(pf);
          }

          console.log(results[0].categories);
          return new LoadProductsSuccess(results[0].categories);
        }));
      })
  );

  constructor(private http: HttpClient, private actions$: Actions) {}
}
