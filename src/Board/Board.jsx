import React from 'react';
import Sqaure from './Sqaure';
//? <div is the row>

const Board = () => {
  return (
    <div>
      <div>
        <Sqaure value={1} />
        <Sqaure value={2} />
        <Sqaure value={3} />
      </div>
      <div>
        <Sqaure value={4} />
        <Sqaure value={5} />
        <Sqaure value={6} />
      </div>
      <div>
        <Sqaure value={7} />
        <Sqaure value={8} />
        <Sqaure value={9} />
      </div>
    </div>
  );
};

export default Board;
