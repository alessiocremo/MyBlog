import './register.css'
import React from "react";
import { Link } from 'react-router-dom';


export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
            <label><span>Username</span></label>
            <input type="text" className="registerInput" placeholder='Enter your username...'/>
            <label><span>Email</span></label>
            <input type="text" className="registerInput" placeholder='Enter your email...'/>
            <label><span>Password</span></label>
            <input type="password" className='registerInput' placeholder='Enter your password...'/>
            <button className="registerButton">Register</button>
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
