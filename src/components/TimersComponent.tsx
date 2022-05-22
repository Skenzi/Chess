import React, { useState } from 'react';
import Player from './models/Player';

interface TimersComponentProps {
    time: number,
}

function TimersComponent({ time }: TimersComponentProps) {
  return (
    <div className="timer">
      {time}
    </div>
  );
}

export default TimersComponent;
