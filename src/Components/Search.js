import React, { useEffect, useState } from 'react';
import './Search.css';

export default function Search() {
  const [searchVal, setSearchVal] = useState('');

  const data = [
    {
      uname: "Elijah",
      skill: ["web-development", "Data-analytics"]
    },
    {
      uname: "Samuel",
      skill: ["fullstack-developer", "photographer"]
    },
    {
      uname: "Kingsley",
      skill: ["Graphics-design", "social-media-manager"]
    },
    {
      uname: "Toyio",
      skill: ["ui/ux design", "Data-analytics"]
    }
  ]

  function setValue(e){
    const val = e.target.value;
    setSearchVal(prev => val);
  }
  
  useEffect(() => {
    if (searchVal.length > 0) {
      const result = data.filter(item => item['uname'].toLowerCase().includes(searchVal.toLowerCase()));
      console.log(searchVal);
      console.log(result);
    }
  }, [searchVal])

  return (
    <div className='searchSection'>
      <div className="sticky-top searchSection__top">
        <img className='logo' src='/logo.png' alt='logo' />
        <h2 className='section__title'>Search for a friend or find closest connection with a required skill.</h2>
        <div className="searchAction">
          <select className='searchInput select' name='searchType'>
            <option value='username'>username</option>
            <option value='skill'>skill</option>
          </select>
          <input type='search' className='searchInput input' value={searchVal} onChange={setValue}/>
        </div>
      </div>
      <ul>
        
      </ul>
    </div>
  )
}

