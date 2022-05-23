import React, { useState, useRef, useEffect } from 'react';
import Player from './models/Player';

interface TimersComponentProps {
  currentPlayer: Player | null,
}

function TimersComponent({ currentPlayer }: TimersComponentProps) {
  const [whitePlayerTime, setWhitePlayerTime] = useState(300);
  const [blackPlayerTime, setBlackPlayerTime] = useState(300);
  const timerRef = useRef<null | ReturnType<(typeof setInterval)>>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      const currTime = currentPlayer?.color === 'white' ? setWhitePlayerTime : setBlackPlayerTime;
      currTime((prev) => prev - 1);
    }, 1000);
  }, [currentPlayer]);

  return (
    <div className="timer">
      <div className="timer">
        Таймер black -
        {' '}
        {blackPlayerTime}
      </div>
      <div className="timer">
        Таймер white -
        {' '}
        {whitePlayerTime}
      </div>
    </div>
  );
}

export default TimersComponent;
