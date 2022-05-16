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
}
