import React from 'react';

//Here we used object destructuring to remove props

const Sqaure = ({ value, onClick }) => {
  // console.log(value);
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Sqaure;
