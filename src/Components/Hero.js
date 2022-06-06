import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
        <h1 className="hero__title">Connect with people of similar interests and skills.</h1>
        <p className='hero__text'>Search for friends and skills much more easier and faster. Also allows you to post <br/> cool 
        and interesting stuffs your friends can see on the timeline.  
        <Link to="/">See more</Link>
        </p>
    </div>
  )
}

export default Hero