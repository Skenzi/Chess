import React, { useState, useEffect } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import Board from './components/models/Board';
import Players from './components/models/Players';

function App() {
  const [board, setBoard] = useState(new Board());
  const [players, setPlayers] = useState(new Players());

  function restart() {
    const newBoard = new Board();
    const newPlayers = new Players();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setPlayers(newPlayers);
  }

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="app">
      <BoardComponent board={board} players={players} setBoard={setBoard} />
    </div>
  );
}

export default App;
