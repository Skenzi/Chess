import Figure from './Figure';

const createFigure = (x: number, y: number, color: string) => {
  if (x === 0 || x === 7) {
    if (y === 0 || y === 7) {
      return new Figure(x, y, 'rook', color);
    }
    if (y === 1 || y === 6) {
      return new Figure(x, y, 'bishop', color);
    }
    if (y === 2 || y === 5) {
      return new Figure(x, y, 'horse', color);
    }
    if (y === 3) {
      return new Figure(x, y, 'king', color);
    }
    if (y === 4) {
      return new Figure(x, y, 'queen', color);
    }
  }
  return new Figure(x, y, 'pawn', color);
};

class Figures {
  figures: Figure[];

  getFigure: (x: number, y: number) => Figure | null;

  constructor() {
    this.figures = [];
    this.getFigure = (x: number, y: number) => (
      this.figures.find((figure) => figure.x === x && figure.y === y) || null);
    for (let x = 0; x < 2; x += 1) {
      for (let y = 0; y < 8; y += 1) {
        const whiteFigure = createFigure(x, y, 'white');
        const blackFigure = createFigure(7 - x, y, 'black');
        this.figures.push(whiteFigure, blackFigure);
      }
    }
  }
}

export default Figures;
