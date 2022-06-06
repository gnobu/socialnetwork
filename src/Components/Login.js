import React, { useRef } from 'react';
import './Login.css';
import { FaArrowRight } from "react-icons/fa";

function Login() {
  let username = useRef()
  let fullName = useRef()
  let email = useRef()
  let password = useRef()
  function continueForm(e) {
    e.preventDefault()
    let uname = username.current.value
    let uemail = email.current.value
    let pass = password.current.value

    if(!localStorage.getItem('users')) {
      const newInput = document.createElement('input')
      newInput.innerHTML = `<input className='formInput' type="email" placeholder='Email' ref={email} />`
      const form = document.querySelector('#email')
      form.append(newInput)
    }
  }

  return (
    <div className='formPage'>
      <img className='logo' src='./logo.png' alt='logo' />
    <div className='formDiv'>
      <form className='formBody' onSubmit={continueForm}>
      <h2 className='mg-l-2'>Login or Get started!</h2>
        <div className='formData'>
        <input className='formInput' id='username' type="text" placeholder='Username' ref={username} />
        <div className='loginForm'>
        <input className='formInput' id='password' type="password" placeholder='Password' ref={password} />
        </div>
        <div className='signupForm'>
        <input className='formInput' id='Fullname' type="text" placeholder='Full Name' ref={fullName} />
        <input className='formInput' id='email' type="email" placeholder='Email' ref={email} />
        <input className='formInput' id='password' type="password" placeholder='Password' ref={password} />
        </div>
        </div>
        <button className='formBtn' type='submit'>Continue &gt;</button>
      </form>
    </div>
    </div>
  )
}


export default Login