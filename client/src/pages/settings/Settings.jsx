import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import React from "react";


export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsProfilePicture">
                  <img className="settingsProfilePictureImg" src="https://wallpaperaccess.com/full/3599238.jpg" alt="" />
                  <label htmlFor="fileInput">
                    <i class="settingsProfilePictureIcon fa-solid fa-wand-sparkles"></i>
                  </label>
                  <input type="file" id="fileInput"/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Harry97" />
                <label>Email</label>
                <input type="email" placeholder="harry.potter@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsFormSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
