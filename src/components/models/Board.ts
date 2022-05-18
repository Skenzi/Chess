import Cell from './Cell';
import Bishop from './figures/Bishop';
import King from './figures/King';
import Knight from './figures/Knight';
import Pawn from './figures/Pawn';
import Queen from './figures/Queen';
import Rook from './figures/Rook';

export default class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i += 1) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j += 1) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, 'black', null));
        } else {
          row.push(new Cell(this, j, i, 'white', null));
        }
      }
      this.cells.push(row);
    }
    return this.cells;
  }

  highlightingCells(selectedCell: Cell | null) {
    for (let i = 0; i < 8; i += 1) {
      const row = this.cells[i];
      for (let j = 0; j < 8; j += 1) {
        const cell = row[j];
        if (selectedCell?.figure?.canMove(cell)) {
          cell.available = true;
        } else {
          cell.available = false;
        }
      }
    }
  }

  getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public addFigures() {
    this.addPawnFigure();
    this.addKingFigure();
    this.addBishopFigure();
    this.addKnightFigure();
    this.addQueenFigure();
    this.addRookFigure();
  }

  private addPawnFigure() {
    for (let i = 0; i < 8; i += 1) {
      new Pawn(this.getCell(i, 1), 'black');
      new Pawn(this.getCell(i, 6), 'white');
    }
  }

  private addKingFigure() {
    new King(this.getCell(4, 0), 'black');
    new King(this.getCell(4, 7), 'white');
  }

  private addQueenFigure() {
    new Queen(this.getCell(3, 0), 'black');
    new Queen(this.getCell(3, 7), 'white');
  }

  private addKnightFigure() {
    new Knight(this.getCell(1, 0), 'black');
    new Knight(this.getCell(6, 0), 'black');
    new Knight(this.getCell(1, 7), 'white');
    new Knight(this.getCell(6, 7), 'white');
  }

  private addBishopFigure() {
    new Bishop(this.getCell(2, 0), 'black');
    new Bishop(this.getCell(5, 0), 'black');
    new Bishop(this.getCell(2, 7), 'white');
    new Bishop(this.getCell(5, 7), 'white');
  }

  private addRookFigure() {
    new Rook(this.getCell(0, 0), 'black');
    new Rook(this.getCell(7, 0), 'black');
    new Rook(this.getCell(7, 7), 'white');
    new Rook(this.getCell(0, 7), 'white');
  }
}
