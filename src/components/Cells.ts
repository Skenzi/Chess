import Cell from './Cell';

class Cells {
  cells: Cell[][];

  createCells: () => Cell[][];

  constructor() {
    this.cells = [];
    this.createCells = () => {
      for (let i = 0; i < 8; i += 1) {
        const newRow = [];
        for (let j = 0; j < 8; j += 1) {
          if ((i + j) % 2 === 0) {
            newRow.push(new Cell(i, j, 'white'));
          } else {
            newRow.push(new Cell(i, j, 'black'));
          }
        }
        this.cells.push(newRow);
      }
      return this.cells;
    };
  }
}

export default Cells;
