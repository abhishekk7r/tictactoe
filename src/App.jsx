import React, { useState } from 'react';
import Board from './components/Board.jsx';
import History from './components/History.jsx';
import StatusMessage from './components/StatusMessage.jsx';
import './styles/root.scss';
import { calculateWinner } from './helpers.js';

const app = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  const winner = calculateWinner(current.board);
  console.log(winner);

  const handleSqaureClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : '0';
        }

        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE !</h1>
      <StatusMessage winner={winner} current={current}/>
      <Board board={current.board} handleSqaureClick={handleSqaureClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default app;
