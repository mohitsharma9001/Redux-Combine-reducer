import {DECREMENT,INCREMENT} from "./action";
const initState = {
    count : 0
   }
export const countReducer = (state = initState,action)=>{
    switch(action.type) {
  
   case INCREMENT : {
    return {...state,
        count : state.count+action.paylode
    }
  
   }
   case DECREMENT : {
    return {...state,
    count : state.count - action.paylode
    }
}
   default : 
    return state
   
    }
}