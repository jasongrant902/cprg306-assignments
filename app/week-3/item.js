import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-gray-200 p-4 m-2 rounded-md shadow-md">
      <div className="text-lg font-bold">{name}</div>
      <div className="text-sm text-gray-600">Quantity: {quantity}</div>
      <div className="text-sm text-gray-600">Category: {category}</div>
    </li>
  );
};

export default Item;