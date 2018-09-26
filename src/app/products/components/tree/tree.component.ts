import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';

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
    // console.log('treeData', treeData);
    this.nestedDataSource.data = treeData.products;
  }

  nestedTreeControl: NestedTreeControl<Node>;
  nestedDataSource: MatTreeNestedDataSource<Node>;

  constructor() {
    this.nestedTreeControl = new NestedTreeControl<Node>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
  }

  ngOnInit() {}

  hasNestedChild = (_: number, nodeData: Node) => nodeData.children ? nodeData.children.length : 0;
  private _getChildren = (node: Node) => node.children;

}
