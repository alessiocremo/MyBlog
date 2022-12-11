import './register.css'
import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    
    try{
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login")
    } catch(err){
      setError(true)
    }

    
  }

  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm"  onSubmit={handleSubmit} >
            <label><span>Username</span></label>
            <input type="text" className="registerInput" placeholder='Enter your username...' onChange={e=>setUsername(e.target.value)} />
            <label><span>Email</span></label>
            <input type="email" className="registerInput" placeholder='Enter your email...' onChange={e=>setEmail(e.target.value)} />
            <label><span>Password</span></label>
            <input type="password" className='registerInput' placeholder='Enter your password...' onChange={e=>setPassword(e.target.value)} />
            <button className="registerButton">Register</button>
            {error && <span class="wentWrong" >something went wrong</span>}

        </form>
        <div className="loginR">
          <div className='alreadyAMemberText'>Already a member?</div>
            <Link to="/login" className='link' >
              <button className="registerLoginButton">
                Login
              </button>
            </Link>
        </div>
    </div>
  )
}
