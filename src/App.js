import React from "react"
import './App.css';

import {Navbar} from "./components/pages/Navbar"
import { Route ,Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/Login";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/login" element={<Login/>}>Login</Route>
      </Routes>
      
    </div>
  );
}

export default App;
