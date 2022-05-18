import Figure, { FigureNames } from './Figure';
import Cell from '../Cell';
import blackLogo from '../../../assets/black-knight.png';
import whiteLogo from '../../../assets/white-knight.png';

export default class Knight extends Figure {
  constructor(cell: Cell, color: string) {
    super(cell, color);
    this.name = FigureNames.KNIGHT;
    this.logo = color === 'black' ? blackLogo : whiteLogo;
  }

  canMove(cell: Cell): boolean {
    if (!super.canMove(cell)) {
      return false;
    }
    if ((this.cell.y + 1 === cell.y && this.cell.x + 2 === cell.x)) return true;
    if ((this.cell.y + 1 === cell.y && this.cell.x - 2 === cell.x)) return true;
    if ((this.cell.y - 1 === cell.y && this.cell.x + 2 === cell.x)) return true;
    if ((this.cell.y - 1 === cell.y && this.cell.x - 2 === cell.x)) return true;

    if ((this.cell.y + 2 === cell.y && this.cell.x + 1 === cell.x)) return true;
    if ((this.cell.y + 2 === cell.y && this.cell.x - 1 === cell.x)) return true;
    if ((this.cell.y - 2 === cell.y && this.cell.x + 1 === cell.x)) return true;
    if ((this.cell.y - 2 === cell.y && this.cell.x - 1 === cell.x)) return true;
    return false;
  }
}
