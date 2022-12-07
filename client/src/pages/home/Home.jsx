import Header from "../../components/header/Header"
import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import React from "react";
import axios from "axios"
import "./home.css"


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts()
  },[])

  return (
    <>
      <Header/> 
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
      </div>
    </>
    
  )
}
