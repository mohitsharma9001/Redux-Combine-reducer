import React from 'react'
import {  useNavigate } from 'react-router-dom'
export const Login = () => {
    const navigate = useNavigate()
    const handleClick = ()=>{
       navigate("/")
    }
  return (
    <div>
        <br /><br /><br />
        <input type="text" placeholder='User name' /> <br /><br />
        <input type="password" placeholder='password'/><br /><br />
        <button onClick={handleClick}>Login</button>
    </div>
  )
}
