import Cell from '../Cell';
import logo from '../../../assets/black-pawn.png';

export enum FigureNames {
  FIGURE = 'фигура',
  KING = 'король',
  QUEEN = 'королева',
  PAWN = 'пешка',
  ROOK = 'ладья',
  BISHOP = 'слон',
  KNIGHT = 'конь',
}

export default class Figure {
  cell: Cell;

  name: FigureNames;

  logo: typeof logo | null;

  color: string;

  constructor(cell: Cell, color: string) {
    this.cell = cell;
    this.cell.figure = this;
    this.color = color;
    this.logo = null;
    this.name = FigureNames.FIGURE;
  }

  canMove(cell: Cell) {
    if (cell.figure?.color === this.cell.figure?.color || cell.figure?.name === FigureNames.KING) return false;
    return true;
  }

  moveFigure(cell: Cell) {
    this.cell.figure = null;
    this.cell = cell;
    this.cell.figure = this;
  }
}
