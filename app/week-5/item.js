import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-red-500 p-4 m-2 rounded-md shadow-md">
      <div className="text-lg font-bold">{name}</div>
      <div className="text-sm text-gray-600">
        Buy {quantity} in {category}
      </div>
    </li>
  );
};

export default Item;