import React, { useState, useEffect } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./Timeline.css";
import pic from '../images/tictactoe.png';

export default function Timeline() {
  const [safe, setSafe] = useState('plain');
  const [charCount, setCharCount] = useState(0);

  // const props = {
  //   bio: "Living my best life.",
  //   followers: [35, 21, 38, 6, 44, 20, 1, 31, 5, 25],
  //   following: [28, 19, 27, 34, 7, 20, 26, 25, 5, 37],
  //   id: 36,
  //   posts: [
  //     {
  //       id: 1,
  //       date: ''
  //     }
  //   ],
  //   timeline: [],
  //   profilePic: "https://avatars.githubusercontent.com/u/36?v=4",
  //   username: "KirinDave"
  // }
  // const curr = new Date(1654271160646);
  
  // console.log((Date.now() - 1654271160646) / 1000)

  const timeline = [
    {
      id: 1,
      author: 'Kirin Dave',
      username: 'KirinDave',
      pic: 'https://avatars.githubusercontent.com/u/36?v=4',
      likes: [1, 2, 3, 4, 5, 6, 7],
      date: 1654441876774,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo optio dolore vitae, consequatur fugiat veniam distinctio esse, eveniet sunt consectetur error illum? Repellat voluptatum aliquid vitae dolorum? Numquam, nihil?'
    },
    {
      id: 2,
      author: 'John Doe',
      username: 'JohnDoe',
      pic: "https://avatars.githubusercontent.com/u/2?v=4",
      likes: [103, 7],
      date: 1653751361079,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo optio dolore vitae, consequatur fugiat veniam distinctio esse, eveniet sunt consectetur error illum? Repellat voluptatum aliquid vitae dolorum? Numquam, nihil?'
    },
    {
      id: 3,
      author: 'Kingsley Akwa',
      username: 'AKfour7',
      pic: pic,
      likes: [1, 2, 3, 4, 5, 6, 7, 35, 34, 23, 76, 256, 75],
      date: 1654418095445,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo optio dolore vitae, consequatur fugiat veniam distinctio esse, eveniet sunt consectetur error illum? Repellat voluptatum aliquid vitae dolorum? Numquam, nihil?'
    },
    {
      id: 4,
      author: 'Kirin Dave',
      username: 'KirinDave',
      pic: 'https://avatars.githubusercontent.com/u/36?v=4',
      likes: [1, 2, 46, 7],
      date: 1651271298484,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo optio dolore vitae, consequatur fugiat veniam distinctio esse, eveniet sunt consectetur error illum? Repellat voluptatum aliquid vitae dolorum? Numquam, nihil?'
    },
    {
      id: 5,
      author: 'Kingsley Akwa',
      username: 'AKfour7',
      pic: pic,
      likes: [1, 15, 24, 6, 37],
      date: 1654441906774,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo optio dolore vitae, consequatur fugiat veniam distinctio esse, eveniet sunt consectetur error illum? Repellat voluptatum aliquid vitae dolorum? Numquam, nihil?'
    },

  ]

  timeline.sort((a, b) => {
    return ( b.date - a.date)
  })

  function countChars(e) {
    const count = e.target.value.length;
    setCharCount(prev => count);
    setSafe(prev => {
      return (count > 0 && count <= 240)
      ? 'safe'
      : (count > 240)
      ? 'unsafe'
      : 'plain'
    })
  }


  return (
    <div className='timeline'>
      <div className="sticky-top">
        <h2 className='section__title'>Timeline</h2>
        <div className='new-post'>
          <div className="image-wrapper">
            <img src='https://avatars.githubusercontent.com/u/36?v=4' alt="author's profile pic" className='profile-pic' />
          </div>
          <form className='post-wrapper'>
            <textarea id='new__post' onChange={countChars} className='new__post' name='new__post' rows='3' maxLength={250} placeholder="Say something..."></textarea>
            <div className='post__action'>
              <span className={safe==='safe' ? 'text-count safe' : safe==='unsafe' ? 'text-count unsafe' : 'text-count'}>{charCount} of 250 (Max Characters)</span>
              <button type='submit' className='post-btn'>Post</button>
            </div>
          </form>
        </div>
      </div>
      <ul className='postcards'>
        {timeline.map(post => {
          return (
            <li key={post.id}><PostCard info={post}/></li>
          )})}
      </ul>
    </div>
  )
}

function PostCard(props) {
  const info = props.info;

  const [hover, setHover] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(info.likes.length);

  function toggleLike(e) {
    setLiked(prev => !prev);
    setLikesCount(prev => {
      return liked
      ? prev -= 1
      : prev += 1
    })
  }

  function getDate(d) {
    const elapsed = Date.now() - d;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[new Date(d).getMonth()];
    const date = new Date(d).getDate();
    const year = new Date(d).getFullYear();

    if (elapsed >= 691200000) return (`${month} ${date}, ${year}`);
    if (elapsed > 86400000) return (`${(elapsed/86400000).toFixed()}d ago`);
    if (elapsed > 3600000) return (`${(elapsed/3600000).toFixed()}h ago`);
    if (elapsed > 60000) return (`${(elapsed/60000).toFixed()}m ago`);
    if (elapsed > 1000) return (`${(elapsed/1000).toFixed()}s ago`);
    return elapsed;
  }

  return (
      <div className='post-card'>
        <div className="image-wrapper">
          <Link to={`/home/${info.username}`}>
            <img src={info.pic} alt="author's profile pic" className='profile-pic' />
          </Link>
        </div>
        <div className='post-wrapper'>
          <Link to={`/home/${info.username}`}>
            <h3 className='author'>{info.author}<span>@{info.username}</span></h3>
          </Link>
          <div className='body'>{info.content}</div>
          <div className='post__action'>
            <div className="likes">
              <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={toggleLike} className='like-btn'>
                <AiFillLike size='1.5rem' color={liked ? '#9900cc' : hover ? '#9900cc88' : '#9900cc22'} />
              </button>
              <p>{likesCount} Likes</p>
            </div>
            <p className='date-time'>{getDate(info.date)}</p>
          </div>
        </div>
      </div>
  )
}