import React from 'react';

export const Filter = ({ name, onChange }) => {
  return (
    <>
      <p>Find contact by name</p>
      <input type="text" name="name" value={name} onChange={onChange} />
    </>
  );
};
