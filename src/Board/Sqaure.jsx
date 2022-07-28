import React from 'react';

//Here we used object destructuring to remove props

const Sqaure = ({ value }) => {
  // console.log(value);
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};

export default Sqaure;
