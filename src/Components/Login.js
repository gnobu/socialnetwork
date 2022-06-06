import React, { useState, useRef } from 'react';
import './Login.css';
import { AiOutlineRight } from "react-icons/ai";

function Login(props) {
  const [proceed, setProceed] = useState('continue');

  let username = useRef()
  let fullName = useRef()
  let email = useRef()
  let password = useRef()
  let newPassword = useRef()
  let confirmPassword = useRef()

  const data = [
    {
      username: 'KirinDave',
      password: 'password'
    },
    {
      username: 'JohnDoe',
      password: 'password'
    },
    {
      username: 'AKfour7',
      password: 'password'
    },
    {
      username: 'JaneDoe',
      password: 'password'
    },
    {
      username: 'gnobu',
      password: 'password'
    },

  ]
  
  // let uemail = email.current.value
  // let pass = password.current.value
  // let newPass = newPassword.current.value
  // let confPass = confirmPassword.current.value
  
  function continueForm(e) {
    e.preventDefault()
    
    let uname = username.current.value;

    if(data.some(user => user.username === uname)) {
      setProceed('login');
      username.current.setAttribute('readonly', 'true');
    } else {
      setProceed('signup');
    }
  }

  return (
    <div className='formPage'>
      <img className='logo' src='./logo.png' alt='logo' />
      <div className='formDiv'>
        <h2 className='mg-l-2'>Login or Get started!</h2>
        <form className='formBody' onSubmit={continueForm}>
          <input className='formInput' id='username' type="text" placeholder='Username' ref={username} />
            <div className={proceed==='login' ? 'loginForm active' : 'loginForm'}>
              <input className='formInput' id='password' type="password" placeholder='Password' ref={password} />
            </div>
            <div className={proceed==='signup' ? 'signupForm active' : 'signupForm'}>
              <input className='formInput' id='Fullname' type="text" placeholder='John Doe' ref={fullName} />
              <input className='formInput' id='email' type="email" placeholder='example@gmail.com' ref={email} />
              <input className='formInput' id='newpassword' type="password" placeholder='password' ref={newPassword} />
              <input className='formInput' id='confirmpassword' type="password" placeholder='confirm password' ref={confirmPassword} />
            </div>
          <button className='formBtn' type='submit'>{proceed==='login' ? 'Log in' : proceed==='signup' ? 'Sign up' : 'Continue'} <AiOutlineRight size='1rem' /></button>
        </form>
      </div>
    </div>
  )
}


export default Login