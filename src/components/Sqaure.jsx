import React from 'react';

//Here we used object destructuring to remove props

const Sqaure = ({ value, onClick, isWinningSqaure }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={` square ${isWinningSqaure ? 'winning' : ' '} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {value}
    </button>
  );
};

export default Sqaure;
