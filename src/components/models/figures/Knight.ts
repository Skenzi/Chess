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
    const dx = Math.abs(this.cell.x - cell.x);
    const dy = Math.abs(this.cell.y - cell.y);
    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  }
}
