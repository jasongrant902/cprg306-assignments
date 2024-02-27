import React, { useState, useEffect } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div>
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
        >
          Category
        </button>
      </div>
      <div>
        <label htmlFor="sortBy">Sort By: </label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name" style={{color: 'black'}}>Name</option>
          <option value="category" style={{color: 'black'}}>Category</option>
        </select>
      </div>
      <div>
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
