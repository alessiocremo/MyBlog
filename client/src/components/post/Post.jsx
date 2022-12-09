import "./post.css"
import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { Context } from "../../context/Context";


export default function Post({post}) {
  const PF = "http://localhost:5000/images/"    //PF = Public Folder
  console.log(post.data);
  const {user} = useContext (Context);

  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt="" />
      )}
        <div className="postInfo">
            <div className="postCats">
            <Link  to={`/?cat=${post.categories}`} style={{textDecoration:"none", color:"inherit"}}>
              <li className="sidebarListItem">{post.categories}</li>
            </Link>
            </div>
            <Link to = {`/post/${post._id}`} className="postLink" style={{textDecoration:"none", color:"inherit"}} >
            <span className="postTitle">
                {post.title}
            </span>
            </Link>
            <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
              </Link>
            <span className="postDate">{ new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">
          {post.desc}
        </p>
    </div>
  )
}
