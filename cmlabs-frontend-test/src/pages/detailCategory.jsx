import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/navbar';

export default function DetailCategory() {
    const [meals, setMeals] = useState([]);
    const { category } = useParams(); // Get the dynamic category from the route
    console.log(category, "category");
    
    useEffect(() => {
        if (category) {
            const fetchCategoryMeals = async () => {
                try {
                    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
                    setMeals(response.data.meals);
                } catch (error) {
                    console.error("Error fetching category meals:", error);
                }
            };

            fetchCategoryMeals();
        }
    }, [category]);

    return (
        <>
            <div className="px-4 py-8 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6  border-gray-300 pb-8 border-b text-left">{category} Meals</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {meals.map((meal) => (
                        <Link key={meal.idMeal} to={`/meals-detail/${meal.idMeal}`}>
                        <div key={meal.idMeal} className="relative rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <p className="text-white font-semibold text-lg text-center px-2">{meal.strMeal}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
