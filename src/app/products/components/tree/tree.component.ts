import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
import { Store } from '@ngrx/store';
import { AddProductCart } from '../../actions/products.action';

export class Node {
  children: Node[];
  name: string;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input('treeData') set treeData(treeData: any) {
    this.nestedDataSource.data = treeData.products;
  }

  nestedTreeControl: NestedTreeControl<Node>;
  nestedDataSource: MatTreeNestedDataSource<Node>;

  constructor(private store: Store<{products: any[]}>) {
    this.nestedTreeControl = new NestedTreeControl<Node>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
  }

  ngOnInit() {}

  addNewItem(node: Node) {
    this.store.dispatch(new AddProductCart(node));
  }

  hasNestedChild = (_: number, nodeData: Node) => nodeData.children ? nodeData.children.length : 0;
  private _getChildren = (node: Node) => node.children;

}
