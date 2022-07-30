import React, { useState } from "react";
import { calculateWinner } from "../../helper";
import Board from "./Board";
import "./Gamestyle.css";

const Tictactoegame = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };
    const handleResetgame = () => {
        setBoard(Array(9).fill(null))
    }
    return (<div>
        <Board cells={board} onClick={handleClick} />
        {
            winner &&
            <div className="game-winner">
                Winner is {winner}
            </div>
        }

        <button className="game-reset" onClick={handleResetgame}>Reset game</button>
    </div>)
};

export default Tictactoegame;