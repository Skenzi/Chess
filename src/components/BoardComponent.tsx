import React from 'react';
import Board from './models/Board';
import Cell from './models/Cell';

const BoardComponent = () => {
    const { cells } = new Board();
    return (
        <div className='board'>
            {cells.map((cellRow: Cell[]) => {
                return <>
                    {cellRow.map((cell: Cell) => {
                        return <div className={`cell ${cell.color}`}></div>
                    })}
                </>
            })}
        </div>
    )
}

export default BoardComponent;
