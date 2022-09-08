import React from 'react'
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem'
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import { updateTodo } from '../../Redux/Todo/action'

export const Todo = () => {
    const todos = useSelector((state)=>state.todo)
  const dispatch = useDispatch()

 const getTodo = ()=>{
  fetch(`http://localhost:3004/todo`)
  .then((res)=>res.json())
  .then((res)=>dispatch(updateTodo(res)))
}

   React.useEffect(()=>{
    getTodo()
   },[])
  return (
    <div>
        <TodoInput getTodo={getTodo}/>
        <br />
        <br />
        {
            todos.map((todo)=><TodoItem key={todo.id} {...todo}/>)
        }
    </div>
  )
}
