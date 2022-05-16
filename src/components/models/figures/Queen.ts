import Figure, { FigureNames } from './Figure';
import Cell from '../Cell';
import blackLogo from '../../../assets/black-queen.png';
import whiteLogo from '../../../assets/white-queen.png';

export default class Queen extends Figure {
  constructor(cell: Cell, color: string) {
    super(cell, color);
    this.name = FigureNames.PAWN;
    this.logo = color === 'black' ? blackLogo : whiteLogo;
  }
}
