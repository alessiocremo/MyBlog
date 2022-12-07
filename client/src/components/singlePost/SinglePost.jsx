import "./singlePost.css"
import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";


export default function SinglePost() {
   
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get ("/posts/" + path);
            console.log(res.data)
            setPost(res.data)
        };
        getPost();
      }, [path]);

  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {post.photo && 
            <img src={post.photo} alt="" className="singlePostImg" />
            }
        </div>
        <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
                <i class="singlePostIcon fa-solid fa-wand-sparkles"></i>
                <i class="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b> {post.username} </b></span>
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='singlePostDesc'>
           {post.desc}
        </p>
    </div>
  )
}
