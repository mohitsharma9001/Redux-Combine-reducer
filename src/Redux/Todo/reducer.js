import { ADD_TODO,REMOVE_TODO,UPDATE_TODO} from "./action";
const initState = {
    todo : []
}
export const todoReducer = (state = initState,{type,paylode})=>{
    switch(type) {
   case ADD_TODO :{
    return {...state, todo : [...state.todo,paylode]}
   }
   case REMOVE_TODO :{
    const updateTodo = state.todo.filter(el=> el.id != paylode)
    return {...state,todo :updateTodo }
   }
   case UPDATE_TODO :{
    return { todo : [...paylode]}
   }
   default : 
    return state
   
    }
}