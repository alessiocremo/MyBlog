import "./header.css"
import React from "react";


export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleLarge">The Cupboard under the Stairs</span>
            <span className="headerTitleSmall">Your safe place</span>
        </div>
        <img className="headerImg" src="https://c1.wallpaperflare.com/preview/233/923/637/harry-potter-warner-bros-warner-studio-harry-potter-studio.jpg" alt="random pic" />
    </div>
  )
}
