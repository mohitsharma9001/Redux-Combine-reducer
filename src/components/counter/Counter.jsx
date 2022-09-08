import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { increment,decrement } from '../../Redux/Counter/action'

export const Counter = () => {
    const count = useSelector((state)=>state.count)
   
    const dispatch = useDispatch()
    const handleInc = ()=>{
   dispatch(increment(10))
    }
    const handleDec = ()=>{
         dispatch(decrement(2))
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleInc}>INC</button>
        <button onClick={handleDec}>DEC</button>
    </div>
  )
}
