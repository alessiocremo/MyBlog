import './write.css'
import React, { useContext } from "react";
import { useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';


export default function Write() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const {user} = useContext(Context)
  const defaultTitle=user.username + "'s post"
  const PF = "http://localhost:5000/images/"


  const handleSubmit = async (e)=> {
    e.preventDefault();
    let newPost;
    
    if(title===""){
      newPost = {
        username: user.username,
        title: defaultTitle,
        desc,
      }
    }

    else {
      newPost = {
        username: user.username,
        title,
        desc,
      };  
    }
    
    
      if (file) {
        const data =new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.photo = filename;
        try {
          await axios.post("/upload", data);
        } catch (err) {}
      }
      else {
        newPost.photo = "defaultic.jpg"
      }
      try {
        const res = await axios.post("/posts", newPost);
        window.location.replace("/post/" + res.data._id);
      } catch (err) {}
    };  //function ends here


  return (
    <div className='write'>
      {file && 
      <img className='writeImg' src={URL.createObjectURL(file)} alt="" />
      }
      {
       !file &&  <img className='writeImg' src={PF + "defaultPic.jpg"} alt="" />
      }
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
                <i class="writeIcon fa-solid fa-plus"></i>
              </label>
              <input type="file" id="fileInput"  style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}  />
              <input type="text" placeholder='Title' className='writeInput' autoFocus={true}   onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
              <textarea placeholder='Tell your story...' type="text" className='writeInput writeText' onChange={e=>setDesc(e.target.value)}></textarea>
            </div>
            <button className="writeSubmit" type='submit'>Publish</button>
        </form>
    </div>
  )
}
