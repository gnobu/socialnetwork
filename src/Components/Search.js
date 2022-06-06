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
    <div className='div'>
      <input type='search' className='search-input' value={searchVal} onChange={setValue}/>
      <ul>
        
      </ul>
    </div>
  )
}

