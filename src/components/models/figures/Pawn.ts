import Figure, { FigureNames } from './Figure';
import Cell from '../Cell';
import blackLogo from '../../../assets/black-pawn.png';
import whiteLogo from '../../../assets/white-pawn.png';

export default class Pawn extends Figure {
  constructor(cell: Cell, color: string) {
    super(cell, color);
    this.name = FigureNames.PAWN;
    this.logo = color === 'black' ? blackLogo : whiteLogo;
  }

  canMove(cell: Cell): boolean {
    if (!super.canMove(cell)) {
      return false;
    }
    if (this.color === 'black') {
      if (!cell.figure && (this.cell.y + 1 === cell.y && this.cell.x === cell.x)) return true;
      if (cell.figure && (this.cell.y + 1 === cell.y && this.cell.x + 1 === cell.x)) return true;
      if (cell.figure && (this.cell.y + 1 === cell.y && this.cell.x - 1 === cell.x)) return true;
    }
    if (this.color === 'white') {
      if (!cell.figure && this.color === 'white' && (this.cell.y - 1 === cell.y && this.cell.x === cell.x)) return true;
      if (cell.figure && (this.cell.y - 1 === cell.y && this.cell.x + 1 === cell.x)) return true;
      if (cell.figure && (this.cell.y - 1 === cell.y && this.cell.x - 1 === cell.x)) return true;
    }
    return false;
  }
}
