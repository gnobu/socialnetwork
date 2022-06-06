import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';
import './App.css';


export default function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<LandingPage />} /> {/* Landing page Route */}
      <Route path='/home' element={<HomePage />} /> {/* Main page Route */}
      <Route path='/home/:user' element={<HomePage />} /> {/* other users page Route */}
      <Route path='*' element={<ErrorPage />} /> {/* Error page Route */}
    </Routes>
    </BrowserRouter >
  )
}
