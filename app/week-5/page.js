"use client"
import { useEffect } from 'react';
import ItemList from './item-list';

const Page = () => {
  useEffect(() => {
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;

