import React from "react"
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [noUser, setnoUser] = useState(false);
  const [noEmail, setnoEmail] = useState(false);
  const [noPassword, setnoPassword] = useState(false);
  const [shortPassword, setshortPassword] = useState(false);


  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  


  const handleDelete = async(e) =>{
    e.preventDefault();


    const userToDelete = {
      userId: user._id,
      username: user.username,
    }


    
    axios.delete("/users/"+user._id, { data: { userId: user._id, username:user.username } })
    dispatch({ type: "LOGOUT" });
    // window.location.replace("/")
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setnoUser(false);
    setnoEmail(false);
    setnoPassword(false);
    setshortPassword(false);


    dispatch({ type: "UPDATE_START" });


    let quit=0;

    if(username===""){
      setnoUser(true);
      quit=1;
    }
    
    if(email===""){
      setnoEmail(true);
      quit=1;
    }

    if(password===""){
      setnoPassword(true);
      quit=1;
    }


    if(password.length<6){
      if(noPassword===true){
        setshortPassword(true);
        quit=1;
      }

    }

    if(quit===1){
      return
    }

    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };




    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateAccount">Update Your Account</span>
          <span className="settingsDeleteAccount" onClick={handleDelete} >Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePicture}
              className="profilePicture"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsProfilePictureIcon fa-solid fa-wand-sparkles"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="settingsSteps">

            <div className="settingsInputStep">
              <label>Username</label>
              {noUser===true && (<span className="inputError">Empty username</span>)}
            </div>
            <input
              type="text"
              id="credentialsInput"
              defaultValue={user.username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <div className="settingsInputStep">
              <label>Email</label>
              {noEmail===true && (<span className="inputError">Empty email</span>)}

            </div>

            <input
              type="email"
              id="credentialsInput"
              defaultValue={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />


            <div className="settingsInputStep">
              <label>Password</label>
              {noPassword===true && (<span className="inputError">Empty password</span>)}
              {shortPassword===true && (<span className="inputError">Password must be at least 6 characters long</span>)}

            </div>

            <input
              type="password"
              id="credentialsInput"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="settingsSubmit">

            </div>

            <button className="settingsFormSubmit" type="submit">
              Update
            </button>
            {success && (
              <span
                style={{ color: "green", textAlign: "center", marginTop: "20px" }}
              >
                Profile has been updated...
              </span>
            )}
            
          </div>

        </form>
      </div>
      <Sidebar />
    </div>
  );
}

