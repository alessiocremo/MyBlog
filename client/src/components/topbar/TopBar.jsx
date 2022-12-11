import "./topbar.css"
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";



export default function TopBar() {
    const PF = "http://localhost:5000/images/"
    const { user, dispatch } = useContext(Context);

    const [search, setSearch] = useState("")


    

    const handleLogout = () => {
      dispatch({ type: "LOGOUT"})
      window.location.replace("/")
    }



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
                  {/* <li className="topListItem">
                    <Link className="topBarLink" to="/"  style={{textDecoration:"none", color:"inherit"}}  >ABOUT </Link>
                  </li> */}
                  <li className="topListItem">
                    <Link className="topBarLink" to="/contacts"  style={{textDecoration:"none", color:"inherit"}}  >CONTACTS </Link>
                  </li>
                  <li className="topListItem">
                    <Link className="topBarLink" to="/write"  style={{textDecoration:"none", color:"inherit"}}  >WRITE </Link>
                  </li>
                  <li className="topListItem" onClick={handleLogout} >
                    {user && "LOGOUT"}
                  </li>
                  
              </ul>
          </div>
          <div className="topRight">
            {user ? (
              <Link className="link" to="/settings">
                <img className="profilePic" src={PF + user.profilePicture} alt="" />
              </Link>
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
            <div className="topSearch">
            <input type="text" placeholder="Search user..." name="" id="topSearchBar" onChange={e=>setSearch(e.target.value)}></input>
                  <Link classname="link" to={`/?user=${search}`} >
                    <button type=""><i class="topSearchIcon fa-solid fa-magnifying-glass"></i></button>
                  </Link>
            </div>
          </div>
      </div>
    )
}

// onSubmit={handleSearch}