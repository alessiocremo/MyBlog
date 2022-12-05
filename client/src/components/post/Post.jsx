import "./post.css"
import React from "react";


export default function Post() {
  return (
    <div className="post">
        <img src="https://c4.wallpaperflare.com/wallpaper/95/92/857/harry-potter-hermione-granger-emma-watson-hd-wallpaper-preview.jpg" alt="HermionePic" className="postImg"/>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                You belong with me
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
        If you could see that I'm the one
        Who understands you
        Been here all along
        So, why can't you see?
        You belong with me
        You belong with meIf you could see that I'm the one
        Who understands you
        Been here all along
        So, why can't you see?
        You belong with me
        You belong with me
        You belong with me
        You belong with me
        </p>
    </div>
  )
}
