import './login.css'
import React from "react";
import { Link } from 'react-router-dom';



export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label><span>Email</span></label>
            <input type="text" className="loginInput" placeholder='Enter your email...'/>
            <label><span>Password</span></label>
            <input type="password" className='loginInput' placeholder='Enter your password...'/>
            <button className="loginButton">Login</button>
        </form>
        <div className="registerL">
                <div className='notAMemberText'>Not a member?</div>
                  <Link to="/register" className='link'>
                    <button className="loginRegisterButton">
                      Register
                    </button>
                  </Link>
        </div>
    </div>
  )
}
