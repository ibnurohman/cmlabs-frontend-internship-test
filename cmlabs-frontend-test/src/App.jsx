import { useState } from 'react'
import './App.css'
import HomePage from './pages/homepage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailCategory from './pages/detailCategory';
import DetailMeals from './pages/detailMeals';
import Navbar from './components/navbar';

function App() {
  return (
    <>
        <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/category/:category" element={<DetailCategory />} />
                    <Route path="/meals-detail/:idMeal" element={<DetailMeals/>} />
                </Routes>
        </Router>
    </>
  )
}

export default App
