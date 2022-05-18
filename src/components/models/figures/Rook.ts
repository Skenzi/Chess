import Figure, { FigureNames } from './Figure';
import Cell from '../Cell';
import blackLogo from '../../../assets/black-rook.png';
import whiteLogo from '../../../assets/white-rook.png';

export default class Rook extends Figure {
  constructor(cell: Cell, color: string) {
    super(cell, color);
    this.name = FigureNames.ROOK;
    this.logo = color === 'black' ? blackLogo : whiteLogo;
  }

  canMove(cell: Cell) {
    if (!super.canMove(cell)) {
      return false;
    }
    if (this.cell.isEmptyHorizontal(cell)) {
      return true;
    }
    if (this.cell.isEmptyVertical(cell)) {
      return true;
    }
    return false;
  }
}
