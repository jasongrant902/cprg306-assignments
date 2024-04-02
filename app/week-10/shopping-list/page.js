"use client"
import React, { useEffect, useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import {getItems, addItem} from './shopping-list-service';

const Page = ({user}) => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({name: '', quantity: 0});
  const [selectedItemName, setSelectedItemName] = useState('');

  const loadItems = async () => {
    try {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    } catch (error) {
      console.error("Error found when loading items: ", error);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      newItem.id = newItemId;
      setItems([...items, newItem]);
      setNewItem({ name: '', quantity: 0 });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  return (
    <main className="container mx-auto p-4 flex justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <h2 style={{ fontSize: 22 }}><strong>Add New Item</strong></h2>
        <NewItem newItem={newItem} onChange={handleChange} onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
};

export default Page;


