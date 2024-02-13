import React from 'react';
import {useState} from 'react';

const NewItem = () => {

const [name, setName] = useState("");

const [quantity, setQuantity] = useState(1);

const [category, setCategory] = useState("produce");

const HandleSubmit = (event) => {
event.preventDefault();

const newItem = {
    name: name,
    quantity: quantity,
    category: category,
}

console.log(NewItem);

alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

setName("");
setQuantity(1);
setCategory("produce");

}

return (
    <form onSubmit={HandleSubmit} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-md'>
      <label className='block mb-2 text-black'>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Item Name:"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </label>
      <label className='block mb-2 text-black'>
        Quantity:
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </label>
      <label className='block mb-2 text-black'>
        Category:
        <select value={category} 
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </label>
      <button type="submit" className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-300">Add Item(s)</button>
    </form>
  );
};

export default NewItem;