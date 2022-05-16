import Cell from './Cell';

export default class Board {
  cells: Cell[][];

  constructor() {
    this.cells = [];
    for (let i = 0; i < 8; i += 1) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j += 1) {
        if ((i + j) % 2 === 0) {
          row.push(new Cell(i, j, 'black'));
        } else {
          row.push(new Cell(i, j, 'white'));
        }
      }
      this.cells.unshift(row);
    }
  }
}
