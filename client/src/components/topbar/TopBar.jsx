import "./topbar.css"
import React from "react";
import { Link } from "react-router-dom";


export default function TopBar() {
    
    const user = false;
    return (
      <div className="top">
          <div className="topLeft">
              <i className="topIcon fa-brands fa-square-facebook"></i>
              <i className="topIcon fa-brands fa-square-instagram"></i>
              <i className="topIcon fa-brands fa-square-twitter"></i>
          </div>
          <div className="topCenter">
              <ul className="topList">
                  <li className="topListItem">
                    <Link className="topBarLink" to="/"  style={{textDecoration:"none", color:"inherit"}}  >HOME </Link>
                  </li>
                  <li className="topListItem">
                    <Link className="topBarLink" to="/"  style={{textDecoration:"none", color:"inherit"}}  >ABOUT </Link>
                  </li>
                  <li className="topListItem">
                    <Link className="topBarLink" to="/"  style={{textDecoration:"none", color:"inherit"}}  >CONTACT </Link>
                  </li>
                  <li className="topListItem">
                    <Link className="topBarLink" to="/write"  style={{textDecoration:"none", color:"inherit"}}  >WRITE </Link>
                  </li>
                  <li className="topListItem">
                    {user && "LOGOUT"}
                  </li>
              </ul>
          </div>
          <div className="topRight">
            {user ? (
              <img className="profilePic" src="https://wallpaperaccess.com/full/3599238.jpg" alt="ProfilePic" />

            ) : (
                    <ul className="topList" >
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                                <Link className="link" to="/register" >
                                    REGISTER
                                </Link>
                        </li>
                    </ul>
            ) }
              <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          </div>
      </div>
    )
}
