import Figure, { FigureNames } from './Figure';
import Cell from '../Cell';
import blackLogo from '../../../assets/black-pawn.png';
import whiteLogo from '../../../assets/white-pawn.png';

export default class Pawn extends Figure {
  isFirstStep: boolean = true;

  constructor(cell: Cell, color: string) {
    super(cell, color);
    this.name = FigureNames.PAWN;
    this.logo = color === 'black' ? blackLogo : whiteLogo;
  }

  canMove(cell: Cell): boolean {
    if (!super.canMove(cell)) {
      return false;
    }
    const direction = this.cell.figure?.color === 'white' ? -1 : 1;
    const firstStepDirection = this.cell.figure?.color === 'white' ? -2 : 2;
    if ((!cell.figure)
    && (cell.x === this.cell.x)
    && ((this.isFirstStep && cell.y === (this.cell.y + firstStepDirection))
    || cell.y === (this.cell.y + direction))) {
      return true;
    }
    if ((cell.figure)
    && cell.x === (this.cell.x + direction)
    && cell.y === (this.cell.y + direction)) {
      return true;
    }
    return false;
  }

  moveFigure(cell: Cell): void {
    super.moveFigure(cell);
    this.isFirstStep = false;
  }
}
