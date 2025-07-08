import type { Node } from 'unist';

export class XNode {
  private _node?: Node;

  public get node() {
    return this._node;
  }

  private _match: Node | undefined;
  public get match(): Node | undefined {
    return this._match;
  }
  public set match(value: Node | undefined) {
    if (this.node?.type === 'listItem') {
      // debugger;
    }
    this._match = value;
  }
  public optMatch: Node | undefined;
  public opt: number = 0;
  public sign: string = '';
  public weight: number = 0;

  constructor(node?: Node) {
    if (node) {
      this._node = node;
      node._xNode = this;
    }
  }
}
