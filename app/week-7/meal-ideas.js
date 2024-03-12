import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState('');

    useEffect(() => {
        if (!ingredient) {
            // If no ingredient is selected, clear the list of meals and selected ingredient
            setMeals([]);
            setSelectedIngredient('');
            return;
        }

        setSelectedIngredient(ingredient);

        const fetchMealIdeas = async () => {
            try {
                const apiURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
                const response = await fetch(apiURL);
    
                if (!response.ok) {
                    throw new Error("Unable to retrieve meal ideas");
                }
    
                const data = await response.json();
                console.log("API response:", data); // Log the API response for debugging
                const fetchedMeals = data.meals || [];
                setMeals(fetchedMeals);
            } catch (error) {
                console.error('Error loading meal ideas:', error);
                // Handle error gracefully, for example:
                setMeals([]);
            }
        };
    
        fetchMealIdeas();
    }, [ingredient]);
    

    return (
        <div>
            <h2>Meal ideas with {selectedIngredient}</h2>
            <ul className="space-y-4">
                {meals.map((meal) => (
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


