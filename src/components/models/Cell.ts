import Figure from './figures/Figure';
import Board from './Board';

export default class Cell {
  readonly x: number;

  readonly y: number;

  readonly color: string;

  board: Board;

  available: boolean;

  figure: Figure | null;

  id: number;

  isEmpty() {
    return this.figure === null;
  }

  public isEmptyVertical(target: Cell) {
    if (target.x !== this.x) return false;

    const min = Math.min(target.y, this.y);
    const max = Math.max(target.y, this.y);
    for (let y = min + 1; y < max; y += 1) {
      if (!this.board.getCell(this.x, y).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  public isEmptyDiagonal(target: Cell) {
    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);
    if (absY !== absX) {
      return false;
    }

    const dy = this.y < target.y ? 1 : -1;
    const dx = this.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; i += 1) {
      if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  public isEmptyHorizontal(target: Cell) {
    if (target.y !== this.y) return false;

    const min = Math.min(target.x, this.x);
    const max = Math.max(target.x, this.x);
    for (let x = min + 1; x < max; x += 1) {
      if (!this.board.getCell(x, this.y).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  constructor(board: Board, x: number, y: number, color: string, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.board = board;
    this.available = false;
    this.figure = figure;
    this.id = Math.random();
  }
}
