
export const ADD_TODO  = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"

export const addTodo = (data)=>({
    type : ADD_TODO,
    paylode : data
})

export const removeTodo = (data)=>({
    type : REMOVE_TODO,
    paylode : data
})

export const updateTodo = (data)=>({
    type : UPDATE_TODO,
    paylode : data
})