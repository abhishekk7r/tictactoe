import React from 'react';

//Here we used object destructuring to remove props

const Sqaure = ({ value, onClick, isWinningSqaure }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSqaure ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Sqaure;
