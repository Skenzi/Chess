import React from 'react';
import Cell from './models/Cell';

interface CellProps {
    cell: Cell,
}

function CellComponent({ cell }: CellProps) {
  return (
    <div className={`cell ${cell.color}`}>
      {cell.figure?.logo && <img className="figure" src={cell.figure.logo} alt="" />}
    </div>
  );
}

export default CellComponent;
