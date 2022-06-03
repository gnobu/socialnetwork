import React from 'react';
import Hero from '../Components/Hero';
import Login from '../Components/Login';
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className='landingPage'>
      <Hero />
      <Login />
    </div>
  )
}

