import "./singlePost.css"
import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";



export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [cat, setCat] = useState("");
    const defaultTitle="Untitled Post"


    const [updateMode, setUpdateMode] = useState(false);
  
    useEffect(() => {
      const getPost = async () => {
        const res = await axios.get("/posts/" + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
        setCat(res.data.categories);
      };
      getPost();
    }, [path]);
  
    const handleDelete = async () => {
      
      try {
        await axios.delete(`/posts/${post._id}`, {
          data: { username: user.username },
        });
        window.location.replace("/");
      } catch (err) {}
    };
  
    const handleUpdate = async () => {

      if(title===""){
        try {
          await axios.put(`/posts/${post._id}`, {
            username: user.username,
            title: defaultTitle,
            desc,
          });
          // window.location.reload()
          setUpdateMode(false);
          return;
        } catch (err) {}
     }

      try {
        await axios.put(`/posts/${post._id}`, {
          username: user.username,
          title,
          desc,
        });
        // window.location.reload()
        setUpdateMode(false)
      } catch (err) {}
    };
  
    return (
      <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            <img src={PF + post.photo} alt="" className="singlePostImg" />
          )}
          {updateMode ? (
            <input
              type="text"
              value={title}
              className="singlePostInput"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="singlePostTitle">
              {title}
              {user!=null && (
                post.username === user.username && (
                    <div className="singlePostEdit">
                      <i
                        className="singlePostIcon far fa-edit"
                        onClick={() => setUpdateMode(true)}
                      ></i>
                      <i
                        className="singlePostIcon far fa-trash-alt"
                        onClick={handleDelete}
                      ></i>
                    </div>
                  )
              )}
            </h1>
          )}
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author:
              <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
              </Link>
            </span>
            
            <span className="singlePostCat">Category:
              <Link  to={`/?cat=${post.categories}`} style={{textDecoration:"none", color:"inherit"}}>
                <b>{cat}</b>
              </Link>
            </span>

            <span className="singlePostDate">
              {new Date(post.createdAt).toDateString()}
            </span>
            
          </div>

          {updateMode ? (
            <textarea
              className='writeInput writeText'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              
            />
          ) : (
            <p className="singlePostDesc">{desc}</p>
          )}
          {updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      </div>
    );
  }

