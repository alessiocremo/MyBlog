import "./sidebar.css"
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default function Sidebar() {
  const [cats, setCats] = useState([])

  useEffect(()=>{
    const getCats = async ()=> {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="data:image/jpeg;base64,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" alt="ProfilePic" />
        <p className="sidebarAboutMeParagraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maxime dignissimos quisquam aperiam vitae </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map ((c) => (
            <Link  to={`/?cat=${c.name}`} style={{textDecoration:"none", color:"inherit"}}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ) )  }
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        </div>
      </div>
    </div>
  )
}
