import React, { useState } from 'react';
import Board from './Board/Board.jsx';
import './styles/root.scss';
import { calculateWinner } from './helpers.js';

const app = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);
  console.log(winner);

  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isXNext ? 'X' : 'O'}`;

  const handleSqaureClick = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : '0';
        }

        return square;
      });
    });
    setIsXNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE !</h1>
      <h2>{message}</h2>
      <Board board={board} handleSqaureClick={handleSqaureClick} />
    </div>
  );
};
export default app;
