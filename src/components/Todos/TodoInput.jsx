import React from 'react'
import {v4 as uuid} from "uuid"


export const TodoInput = (getTodo) => {
    const [title,setTitle] = React.useState("")
  
    const handleClick= ()=>{
        const paylode ={
        title,
        status : false,
        id : uuid()
        };
       fetch(`http://localhost:3004/todo`,{
        method : "POST",
        body : JSON.stringify(paylode),
        headers : {
          "Content-Type" : "application/json"
        }
       })
    .then(()=>getTodo())
      
    }
  return (
    <div>
        <input type="text" placeholder='Add Todo' value={title} onChange = {(e)=>setTitle(e.target.value)}/>
        <button onClick={handleClick}>Add Todo</button>
    </div>
  )
}
