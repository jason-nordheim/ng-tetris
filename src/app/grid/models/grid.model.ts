import { NodeModel } from './node.model';
import { GridPositionModel } from './position.model';

export class GridModel {
  readonly Nodes: NodeModel;

  constructor(readonly rows: number, readonly cols: number) {
    for (let row = 1; row < rows + 1; row++) {
      for (let col = 1; col < cols + 1; col++) {
        const p = new GridPositionModel(row, col);
        const n = new GridNode(p);
        this._nodes[p] = n;
      }
    }
  }
}
