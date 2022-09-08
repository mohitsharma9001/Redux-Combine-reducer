import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../../Redux/Todo/action'

export const TodoItem = ({title,status,id}) => {
const dispatch = useDispatch()
  const handleDleate = ()=>{
    dispatch(removeTodo(id))
  }
  return (
    <div>
        <p>{title} {"====>"} {status ? "Compleated" : "Not Compleated"}</p>
        <button onClick={handleDleate}>Dleate Todo</button>
    </div>
  )
}
