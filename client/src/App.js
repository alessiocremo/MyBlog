import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home.jsx"
import React, { useContext } from "react";
// import ReactDOM from 'react-dom';
import TopBar from "./components/topbar/TopBar.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import { Context } from "./context/Context";


function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route exact path='/' element ={<Home/>}/>
        <Route path='/register' element ={user ? <Home/> : <Register/>}/>
        <Route path='/login' element ={user ? <Home/> :<Login/>}/>
        <Route path='/write' element ={user ? <Write/> : <Login/>}/>
        <Route path='/settings' element ={user ? <Settings/>: <Login/>}/>
        <Route path='/post/:postId' element ={<Single/>}/>
      </Routes>
    </BrowserRouter>      
  );
}

export default App;
