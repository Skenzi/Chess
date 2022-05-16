import Figure from './figures/Figure';
import Board from './Board';

export default class Cell {
  readonly x: number;

  readonly y: number;

  readonly color: string;

  board: Board;

  figure: Figure | null;

  id: number;

  constructor(board: Board, x: number, y: number, color: string, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.board = board;
    this.figure = figure;
    this.id = Math.random();
  }
}
