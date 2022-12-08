import './login.css'
import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';



export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const  {dispatch, isFetching} = useContext(Context)


  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload:res.data});
    
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"})
    }
  }


  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm" onSubmit={handleSubmit} >
            <label><span>Username</span></label>
            <input type="text" className="loginInput" placeholder='Enter your username...'  ref={userRef} />
            <label><span>Password</span></label>
            <input type="password" className='loginInput' placeholder='Enter your password...' ref={passwordRef} />
            <button className="loginButton"  type='submit' disabled={isFetching} >Login</button>
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
