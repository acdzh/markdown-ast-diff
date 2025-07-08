import { XNode } from './XNode';

export class XMap {
  public readonly nodes: (XNode | undefined)[] = [];
  public maxId: number = 0;
  public maxNodes: number = 0;
  public maxWeight: number = 0;

  constructor() {
    this.nodes = [];
  }

  getXNode(id: number): XNode | undefined {
    return this.nodes[id];
  }

  setXNode(id: number, node: XNode) {
    this.nodes[id] = node;
    if (id > this.maxId) {
      this.maxId = id;
    }
    this.maxNodes += 1;
  }
}
