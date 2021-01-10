import { GridModel } from './grid.model';
import { NodeModelType } from '../interfaces/emums';
import { GridPositionModel } from './position.model';

export class NodeModel {
  readonly Pos: GridPositionModel;
  readonly Grid: GridModel;
  readonly Type: NodeModelType = NodeModelType.Open;

  constructor(grid: GridModel, pos: GridPositionModel, type?: NodeModelType) {
    this.Grid = grid;
    this.Pos = pos;

    if (type) this.Type = type;
  }
}
