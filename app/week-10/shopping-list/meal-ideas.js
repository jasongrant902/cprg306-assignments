import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState('');

    useEffect(() => {

        const cleanUpIngredient = (ingredientName) => {
            if (ingredientName.includes(',')) {
                const parts = ingredientName.split(',').map(part => part.trim());
                return parts[0];
            } else {
                return ingredientName.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/\d+(\.\d+)?\s?(l|L|kg|g|ml|lb|oz|each)/g, '').trim();
            }
        };

        setSelectedIngredient(ingredient);

        const fetchMealIdeas = async () => {
            try {
                const cleanedIngredient = cleanUpIngredient(ingredient);
                const apiURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanedIngredient}`;
                const response = await fetch(apiURL);
    
                if (!response.ok) {
                    throw new Error("Unable to retrieve meal ideas");
                }
    
                const data = await response.json();
                console.log("API response:", data);
                const fetchedMeals = data.meals || [];
                setMeals(fetchedMeals);
            } catch (error) {
                console.error('Error loading meal ideas:', error);
                setMeals([]);
            }
        };
    
        fetchMealIdeas();
    }, [ingredient]);
    

    return (
        <div>
            <h2>Meal ideas with {selectedIngredient}</h2>
            <ul className="space-y-4">
                {meals && meals.map((meal) => (
                    <li key={meal.idMeal} className="bg-red-500 p-2 rounded-md shadow-md cursor-pointer hover:bg-red-600 transition-colors">
                        <div className="text-sm font-semibold">{meal.strMeal}</div>
                        <div className="text-xs text-gray-600">Category: {meal.strCategory}</div>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-24 h-24 mt-2 rounded-md" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;


