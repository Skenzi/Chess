import Figure, { FigureNames } from './Figure';
import Cell from '../Cell';
import blackLogo from '../../../assets/black-queen.png';
import whiteLogo from '../../../assets/white-queen.png';

export default class Queen extends Figure {
  constructor(cell: Cell, color: string) {
    super(cell, color);
    this.name = FigureNames.QUEEN;
    this.logo = color === 'black' ? blackLogo : whiteLogo;
  }

  canMove(cell: Cell) {
    if (!super.canMove(cell)) {
      return false;
    }
    if (this.cell.isEmptyDiagonal(cell)) {
      return true;
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
