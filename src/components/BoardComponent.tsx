import React, { useState } from 'react';
import Board from './models/Board';
import Cell from './models/Cell';
import CellComponent from './CellComponent';

interface BoardProps {
    board: Board,
    setBoard: React.Dispatch<React.SetStateAction<Board>>,
}

function BoardComponent({ board, setBoard }: BoardProps) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  function updateBoard() {
    const newBoard = new Board();
    newBoard.cells = board.cells;
    setBoard(newBoard);
  }
  const clickHandler = (cell: Cell) => {
    if (selectedCell !== cell && selectedCell?.figure?.canMove(cell)) {
      setSelectedCell(null);
      board.highlightingCells(null);
      selectedCell?.figure?.moveFigure(cell);
    } else if (cell.figure) {
      setSelectedCell(cell);
      board.highlightingCells(cell);
      // updateBoard();
    }
  };
  return (
    <div className="board">
      {board.cells.map((cellRow: Cell[]) => (
        <React.Fragment key={(10 * Math.random())}>
          {cellRow.map((cell: Cell) => (
            <CellComponent
              key={cell.id}
              cell={cell}
              selectedCell={selectedCell}
              setSelectedCell={setSelectedCell}
              clickHandler={clickHandler}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default BoardComponent;
