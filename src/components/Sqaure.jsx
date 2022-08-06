import React from 'react';

//Here we used object destructuring to remove props

const Sqaure = ({ value, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Sqaure;
