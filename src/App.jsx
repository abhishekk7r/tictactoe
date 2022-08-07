import React, { useState } from 'react';
import Board from './components/Board.jsx';
import History from './components/History.jsx';
import StatusMessage from './components/StatusMessage.jsx';
import './styles/root.scss';
import { calculateWinner } from './helpers.js';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];
const app = () => {
  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  const { winner, winningSqaures } = calculateWinner(current.board);

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

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE !
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSqaureClick={handleSqaureClick}
        winningSqaures={winningSqaures}
      />
      <button
        type="button"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ' '}`}
      >
        Start new game
      </button>
      <h2 style={{ fontWeight: 'normal' }}></h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls"></div>
    </div>
  );
};
export default app;
