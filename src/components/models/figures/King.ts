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
    const nextX = this.cell.x + 1;
    const prevX = this.cell.x - 1;
    const nextY = this.cell.y + 1;
    const prevY = this.cell.y - 1;
    if ((cell.x >= prevX && cell.x <= nextX) && (cell.y >= prevY && cell.y <= nextY)) {
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
