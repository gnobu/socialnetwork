import React, { useState } from 'react';
import './Profile.css';
import pic from '../images/tictactoe.png';

export default function Profile() {
  const [connectEdit, setConnectEdit] = useState('edit');

  return (
    <div className="profileSection">
      <div className='sticky-top profile'>
        <div className="intro">
          <div className="profileWrapper"><img className='profilePic' src={pic} alt='Profile picture' /></div>
          <div className="handle">
            <h2>John Doe</h2>
            <p>@JohnDoe</p>
            <div className='connectionsDiv'>
              <button className='connections'>5 Followers</button>
              <button className='connections'>5 Following</button>
            </div>
          </div>
        </div>
        <div className="bioDiv">
          <h3>Bio:</h3>
          <p className='bio'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="skillsDiv">
          <h3>Skills:</h3>
          <p className='skills'>Web dev || Data Analysis</p>
        </div>
        <div className='profileActions'>
          <button className='connectEdit'>{connectEdit==='notfollowing' ? 'Follow': connectEdit==='following' ? 'Unfollow' : 'Edit' }</button>
        </div>
      </div>
    </div>
  )
}

