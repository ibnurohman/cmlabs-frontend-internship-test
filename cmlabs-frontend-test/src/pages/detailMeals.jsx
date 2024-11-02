import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';

export default function DetailMeals() {
    const [mealDetail, setMealDetail] = useState(null);
    const { idMeal } = useParams(); // Get the meal ID from the route

    useEffect(() => {
        const fetchMealDetail = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
                setMealDetail(response.data.meals[0]);
            } catch (error) {
                console.error("Error fetching meal details:", error);
            }
        };

        fetchMealDetail();
    }, [idMeal]);

    if (!mealDetail) return <div>Loading...</div>;

    return (
        <>
            <div className="max-w-4xl mx-auto p-6 space-y-12">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl text-left font-semibold border-gray-300 pb-8 border-b text-gray-800 mb-2">{mealDetail.strMeal}</h1>
                    <p className="text-red-600 text-lg mt-8 text-left italic">{mealDetail.strArea} Culinary</p>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-10">
    {/* Left Column - Image with custom width */}
    <div className="rounded-lg overflow-hidden shadow-lg w-full h-80"> {/* Wider on larger screens */}
        <img 
            src={mealDetail.strMealThumb} 
            alt={mealDetail.strMeal}
            className="w-full h-full object-cover"
        />
    </div>

    {/* Right Column - Instructions and Ingredients */}
    <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">Instructions</h2>
        <ol className="space-y-4 text-gray-700 list-decimal list-inside">
            {mealDetail.strInstructions.split('.').map((instruction, index) => (
                <li key={index}>{instruction.trim()}</li>
            ))}
        </ol>

        {/* Ingredients Section */}
        <div className="md:col-span-1">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ingredients</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {Object.keys(mealDetail)
                    .filter(key => key.includes('strIngredient') && mealDetail[key])
                    .map((ingredient, index) => (
                        <li key={index}>{mealDetail[ingredient]}</li>
                    ))}
            </ul>
        </div>
    </div>
</div>



                {/* Tutorials Section */}
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tutorials</h2>
                    <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center h-64 shadow-inner">
                        <p className="text-gray-500">Video tutorial placeholder</p>
                    </div>
                </div>
            </div>
        </>
    );
}
