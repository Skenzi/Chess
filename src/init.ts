import './styles/app.scss';
import Cells from "./components/Cells";
import Cell from "./components/Cell";
import Figures from './components/Figures';

export default () => {
  const apiCells = new Cells();
  const apiFigures = new Figures();
  const cells = apiCells.getCells();
  const desk = document.querySelector('.desk');
  for (let i = 0; i < cells.length; i += 1) {
    const rowCells = cells[i];
    const rowDesk = document.createElement('div');
    rowDesk.classList.add('desk__row');
    rowDesk.setAttribute('id', String(i));
    rowCells.forEach((cell: Cell) => {
      const cellDesk = document.createElement('div');
      cellDesk.classList.add('desk__cell', `desk__cell-${cell.color}`);
      cellDesk.setAttribute('data-x', String(cell.x));
      cellDesk.setAttribute('data-y', String(cell.y));
      const figure = apiFigures.getFigure(cell.x, cell.y);
      if (figure) {
        const figureDesk = document.createElement('div');
        figureDesk.classList.add('desk__figure');
        figureDesk.textContent = figure.type;
        cellDesk.appendChild(figureDesk);
      }
      rowDesk.appendChild(cellDesk);
    });
    desk?.prepend(rowDesk);
  }
};
