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
        <span className="sidebarTitle">ABOUT US</span>
        <img className="sidebarImg" src="https://c0.wallpaperflare.com/preview/729/518/558/university-of-michigan-united-states-ann-arbor-old.jpg" alt="" />
        <p className="sidebarAboutMeParagraph">Mr. and Mrs. Dursley, of number four, Privet Drive, 
were proud to say that they were perfectly normal, 
thank you very much. They were the last people you’d 
expect to be involved in anything strange or 
mysterious, because they just didn’t hold with such 
nonsense. 

Mr. Dursley was the director of a firm called 
Grunnings, which made drills. He was a big, beefy 
man with hardly any neck, although he did have a 
very large mustache. Mrs. Dursley was thin and 
blonde and had nearly twice the usual amount of 
neck, which came in very useful as she spent so 
much of her time craning over garden fences, spying 
on the neighbors. The Dursley s had a small son 
called Dudley and in their opinion there was no finer 
boy anywhere. 

</p>
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
