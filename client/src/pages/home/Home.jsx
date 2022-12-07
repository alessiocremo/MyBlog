import Header from "../../components/header/Header"
import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import React from "react";
import axios from "axios"
import "./home.css"
import { useLocation } from "react-router-dom";


export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get("posts/" + search)
      console.log(res.data)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])

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
