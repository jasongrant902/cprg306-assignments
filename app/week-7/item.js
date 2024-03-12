import React, { useState } from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        onSelect(name);
    };

    return (
        <li 
            className={`bg-red-500 p-4 m-2 rounded-md shadow-md cursor-pointer ${isHovered ? 'bg-red-700' : ''}`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="text-lg font-bold">{name}</div>
            <div className="text-sm text-gray-600">
                Buy {quantity} in {category}
            </div>
        </li>
    );
};

export default Item;
