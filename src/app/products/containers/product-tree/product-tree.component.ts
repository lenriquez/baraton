import { LoadProducts } from './../../actions/products.action';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { faCartPlus, faBars } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { select } from '@ngrx/store';

/** @title Responsive sidenav */
@Component({
  selector: 'app-product-tree',
  templateUrl: './product-tree.component.html',
  styleUrls: ['./product-tree.component.scss'],
})
export class ProductTreeComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  faCartPlus = faCartPlus;
  faBars = faBars;
  products$: Observable<any>;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private store: Store<{products: any[]}>) {

    this.products$ = this.store.pipe(select('products'));
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
