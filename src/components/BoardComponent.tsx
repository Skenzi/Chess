import React from 'react';
import Board from './models/Board';
import Cell from './models/Cell';
import CellComponent from './CellComponent';

interface BoardProps {
    board: Board
}

function BoardComponent({ board }: BoardProps) {
  return (
    <div className="board">
      {board.cells.map((cellRow: Cell[]) => (
        <React.Fragment key={(10 * Math.random())}>
          {cellRow.map((cell: Cell) => <CellComponent key={cell.id} cell={cell} />)}
        </React.Fragment>
      ))}
    </div>
  );
}

export default BoardComponent;
