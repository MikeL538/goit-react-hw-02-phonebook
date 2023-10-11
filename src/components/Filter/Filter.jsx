import React from 'react';

const Filter = ({ handleFilterChange }) => {
  return (
    <input
      id="search"
      placeholder="Search contact"
      onChange={e => handleFilterChange(e.target.value)}
    />
  );
};

export default Filter;
