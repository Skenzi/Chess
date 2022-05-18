import Figure, { FigureNames } from './Figure';
import Cell from '../Cell';
import blackLogo from '../../../assets/black-bishop.png';
import whiteLogo from '../../../assets/white-bishop.png';

export default class Bishop extends Figure {
  constructor(cell: Cell, color: string) {
    super(cell, color);
    this.name = FigureNames.BISHOP;
    this.logo = color === 'black' ? blackLogo : whiteLogo;
  }

  canMove(cell: Cell) {
    if (!super.canMove(cell)) {
      return false;
    }
    if (this.cell.isEmptyDiagonal(cell)) {
      return true;
    }
    return false;
  }
}
