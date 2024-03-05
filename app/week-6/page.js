"use client"
import { useEffect, useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({name: '', price: 0});

  useEffect(() => {
    setItems(itemsData);
  }, [itemsData]);

  const handleAddItem = (newItem) => {
    if (newItem.name && newItem.quantity > 0){
      setItems([...items, newItem]);
      setNewItem({name: '', quantity: 0});
    }
  };

    const handleChange = (e) => {
      setNewItem({
        ...newItem,
        [e.target.name]: e.target.value,
      });
    };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <br></br>
      <h2 style={{fontSize: 22}}><strong>Add New Item</strong></h2>
      <NewItem newItem={newItem} onChange={handleChange} onAddItem={handleAddItem} />
      <ItemList items={items}/>
    </main>
  );
};

export default Page;

