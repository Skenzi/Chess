import React, { useState, useEffect } from 'react';
import Board from './models/Board';
import Player from './models/Player';
import Cell from './models/Cell';
import CellComponent from './CellComponent';
import Players from './models/Players';

interface BoardProps {
    board: Board,
    currentPlayer: Player,
    players: Players,
    setBoard: React.Dispatch<React.SetStateAction<Board>>,
    setCurrentPlayer: React.Dispatch<React.SetStateAction<Player>>,
    setTime: React.Dispatch<React.SetStateAction<number>>,
}

function BoardComponent({
  board, players, currentPlayer, setCurrentPlayer, setBoard, setTime,
}: BoardProps) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
  function updateBoard() {
    const newBoard = new Board();
    newBoard.cells = board.cells;
    setBoard(newBoard);
  }

  const timerHelper = async () => {
    const timer = window.setTimeout(() => {
      const newTime = currentPlayer.getTime() - 1;
      currentPlayer.setTime(newTime);
      setTime(newTime);
      timerHelper();
    }, 1000);
    currentPlayer.setTimer(timer);
  };

  const clickHandler = (cell: Cell) => {
    if (selectedCell !== cell && selectedCell?.figure?.canMove(cell)) {
      setSelectedCell(null);
      board.highlightingCells(null);
      selectedCell?.figure?.moveFigure(cell);
      currentPlayer.stopTimer();
      players.changeCurrentPlayer();
      setCurrentPlayer(players.getCurrentPlayer());
    } else if (cell.figure && cell.figure.color === currentPlayer.color) {
      timerHelper();
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
