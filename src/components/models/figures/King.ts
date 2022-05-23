import Figure, { FigureNames } from './Figure';
import Cell from '../Cell';
import blackLogo from '../../../assets/black-king.png';
import whiteLogo from '../../../assets/white-king.png';

export default class King extends Figure {
  constructor(cell: Cell, color: string) {
    super(cell, color);
    this.name = FigureNames.KING;
    this.logo = color === 'black' ? blackLogo : whiteLogo;
  }

  canMove(cell: Cell) {
    if (!super.canMove(cell)) {
      return false;
    }
    const dx = Math.abs(this.cell.x - cell.x);
    const dy = Math.abs(this.cell.y - cell.y);
    if ((dx === 1 && dy === 1) || (dx === 0 && dy === 1) || (dx === 1 && dy === 0)) {
      if (this.cell.isEmptyDiagonal(cell)) {
        return true;
      }
      if (this.cell.isEmptyHorizontal(cell)) {
        return true;
      }
      if (this.cell.isEmptyVertical(cell)) {
        return true;
      }
    }
    return false;
  }
}
