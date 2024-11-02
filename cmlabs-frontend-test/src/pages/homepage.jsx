import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                setCategories(response.data.categories);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <>
            <div className="flex flex-col items-center px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">See All The Delicious Foods</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link 
                            key={category.idCategory} 
                            to={`/category/${category.strCategory}`} // Dynamic link to category detail
                        >
                            <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                                <img
                                    src={category.strCategoryThumb}
                                    alt={category.strCategory}
                                    className="w-full h-32 object-cover opacity-80"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                    <p className="text-white font-semibold text-lg">{category.strCategory}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
