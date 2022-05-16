import Figure, { FigureNames } from './Figure';
import Cell from '../Cell';
import blackLogo from '../../../assets/black-king.png';
import whiteLogo from '../../../assets/white-king.png';

export default class King extends Figure {
  constructor(cell: Cell, color: string) {
    super(cell, color);
    this.name = FigureNames.PAWN;
    this.logo = color === 'black' ? blackLogo : whiteLogo;
  }
}
