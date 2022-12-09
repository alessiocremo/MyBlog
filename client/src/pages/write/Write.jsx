import './write.css'
import React, { useContext } from "react";
import { useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import { useEffect } from 'react';


export default function Write() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [cat, setCat] = useState("")
  const [cats, setCats] = useState([])


  const [file, setFile] = useState(null)
  const {user} = useContext(Context)
  const defaultTitle=user.username + "'s post"
  const PF = "http://localhost:5000/images/"

  useEffect(()=>{
    const getCats = async ()=> {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[])

  const handleSubmit = async (e)=> {
    e.preventDefault();
    let newPost;
    
    if(title===""){
      newPost = {
        username: user.username,
        title: defaultTitle,
        desc,
        categories: cat,
      }
    }

    else {
      newPost = {
        username: user.username,
        title,
        desc,
        categories: cat,
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
        newPost.photo = "defaultPic.jpg"
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
            <div className="writeSelectFile">
              <label htmlFor="fileInput">
                <i class="writeIcon fa-solid fa-plus"></i>
              </label>
              <input type="file" id="fileInput"  style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}  />
              <div className="writeSelectFilePlease">Please, click on the icon to add a picture to your post</div>
            </div>

            <div className="writeSelectCatPlase">
              Please, select a category for your post
            </div>

              <div className="writeSelectCat">
                  {cats.map((c) =>(
                    <div className="writeRadio">
                      <input type="radio" name="category-name" value={c.name} onClick={e=>setCat(e.target.value)} required/>
                      <label for="category-name">{c.name}</label>
                    </div>
                  ) )}
              </div>

              <input type="text" placeholder='Title' className='writeInput' autoFocus={true}   onChange={e=>setTitle(e.target.value)}/>

            </div>
            <div className="writeFormGroup">
              <textarea placeholder='Tell us your story...' type="text" className='writeInput writeText' onChange={e=>setDesc(e.target.value)}></textarea>
            </div>
            <button className="writeSubmit" type='submit'>Publish</button>
        </form>
    </div>
  )
}
