import React, { useState, useEffect } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import TimersComponent from './components/TimersComponent';
import ScoresComponent from './components/ScoresComponent';
import Board from './components/models/Board';
import Player from './components/models/Player';

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayers] = useState(new Player('white'));
  const [blackPlayer, setBlackPlayers] = useState(new Player('black'));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  }

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === 'white' ? blackPlayer : whitePlayer);
  };

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="app">
      <TimersComponent currentPlayer={currentPlayer} />
      <BoardComponent
        board={board}
        swapPlayer={swapPlayer}
        currentPlayer={currentPlayer}
        setBoard={setBoard}
      />
      <ScoresComponent />
    </div>
  );
}

export default App;
