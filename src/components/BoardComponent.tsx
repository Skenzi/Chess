import React, { useState, useEffect } from 'react';
import Board from './models/Board';
import Player from './models/Player';
import Cell from './models/Cell';
import CellComponent from './CellComponent';

interface BoardProps {
    board: Board,
    currentPlayer: Player | null,
    setBoard: React.Dispatch<React.SetStateAction<Board>>,
    swapPlayer: () => void,
}

function BoardComponent({
  board, currentPlayer, setBoard, swapPlayer,
}: BoardProps) {
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
      swapPlayer();
    } else if (cell.figure && cell.figure.color === currentPlayer?.color) {
      setSelectedCell(cell);
      board.highlightingCells(cell);
      updateBoard();
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
              clickHandler={clickHandler}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default BoardComponent;
