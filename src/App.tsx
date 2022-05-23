import React, { useState, useEffect } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import TimersComponent from './components/TimersComponent';
import ScoresComponent from './components/ScoresComponent';
import Board from './components/models/Board';
import Players from './components/models/Players';
import Player from './components/models/Player';

function App() {
  const [board, setBoard] = useState(new Board());
  const [players, setPlayers] = useState(new Players());
  const [currentPlayer, setCurrentPlayer] = useState<Player>(players.player1);
  const [time, setTime] = useState(300);

  function restart() {
    currentPlayer.stopTimer();
    const newBoard = new Board();
    const newPlayers = new Players();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
    setPlayers(newPlayers);
    setCurrentPlayer(newPlayers.player1);
    setTime(newPlayers.player1.time);
  }

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="app">
      <TimersComponent time={time} />
      <BoardComponent
        board={board}
        setTime={setTime}
        players={players}
        setCurrentPlayer={setCurrentPlayer}
        currentPlayer={currentPlayer}
        setBoard={setBoard}
      />
      <ScoresComponent />
    </div>
  );
}

export default App;
