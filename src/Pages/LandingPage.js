import React, { useEffect, useState } from 'react';
import Hero from '../Components/Hero';
import Login from '../Components/Login';
import "./LandingPage.css";

export default function LandingPage() {
  const [users, setUsers] = useState({});

  

  function fetchFollows(IDs, id) {
    const res = [];
    
    while (res.length < 10) {
      const rand = Math.floor(Math.random() * 47);
      if (IDs.includes(rand) && rand != id && !res.includes(rand)) res.push(rand);
    }
    return res;
  }

  async function fetchUsers() {
    const req = await fetch('https://api.github.com/users');
    if (req.ok) {
      const res = await req.json();
      const IDs = res.map(user => user.id);

      const usersObj = res.reduce((cum, user) => {
        cum[user.login] = {
          username: user.login,
          profilePic: user.avatar_url,
          id : user.id,
          followers : fetchFollows(IDs, user.id),
          following : fetchFollows(IDs, user.id),
          password: 'password',
          bio : 'Living my best life.',
          posts: ''
        }
        return cum;
      }, {});
      setUsers(prev => usersObj);
    }
  }
  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, [])
  return (
    <div className='landingPage'>
      <Hero />
      <Login />
    </div>
  )
}

