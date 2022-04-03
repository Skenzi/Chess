import Cell from './Cell';

class Cells {
  cells: Cell[][];

  getCells: () => Cell[][];

  constructor() {
    this.cells = [];
    this.getCells = () => this.cells;
    const countSide = 8;
    for (let i = 0; i < countSide; i += 1) {
      const newRow = [];
      for (let j = 0; j < countSide; j += 1) {
        if ((i + j) % 2 === 0) {
          newRow.push(new Cell(i, j, 'black'));
        } else {
          newRow.push(new Cell(i, j, 'white'));
        }
      }
      this.cells.push(newRow);
    }
  }
}

export default Cells;
