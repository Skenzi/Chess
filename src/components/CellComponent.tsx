import React from 'react';
import Cell from './models/Cell';

interface CellProps {
    cell: Cell,
    selectedCell: Cell | null,
    setSelectedCell: React.Dispatch<React.SetStateAction<Cell | null>>,
    clickHandler: (cell: Cell) => void,
}

function CellComponent({
  cell, selectedCell, setSelectedCell, clickHandler,
}: CellProps) {
  const selected = cell.x === selectedCell?.x && cell.y === selectedCell?.y;
  return (
    <div className={`cell ${cell.color} ${selected ? 'selected' : ''} ${cell.available && cell.figure ? 'attacked' : ''}`} onClick={() => clickHandler(cell)}>
      {cell.available && !cell.figure ? <div className="available" /> : null}
      {cell.figure?.logo && <img className="figure" src={cell.figure.logo} alt="" />}
    </div>
  );
}

export default CellComponent;
