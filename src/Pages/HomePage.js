import React from 'react';
import Search from '../Components/Search';
import Timeline from '../Components/Timeline';
import Profile from '../Components/Profile';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className='homePage'>
      <Search />
      <Timeline />
      <Profile />
    </div>
  )
}

