import React from 'react';
import Sqaure from './Sqaure';

const Board = ({ board, handleSqaureClick }) => {
  const renderSqaure = position => {
    return (
      <Sqaure
        value={board[position]}
        onClick={() => {
          handleSqaureClick(position);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSqaure(0)}
        {renderSqaure(1)}
        {renderSqaure(2)}
      </div>
      <div className="board-row">
        {renderSqaure(3)}
        {renderSqaure(4)}
        {renderSqaure(5)}
      </div>
      <div className="board-row">
        {renderSqaure(6)}
        {renderSqaure(7)}
        {renderSqaure(8)}
      </div>
    </div>
  );
};

export default Board;
