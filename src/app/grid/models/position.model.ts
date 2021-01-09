export class GridPositionModel {
  readonly Row: number;
  readonly Col: number;

  static Key(row: number, col: number) {
    return `${row},${col}`;
  }

  get Key() {
    return GridPositionModel.Key(this.Row, this.Col);
  }

  constructor(row: number, col: number) {
    this.Row = row;
    this.Col = col;
  }
}
