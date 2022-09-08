import {legacy_createStore as createStore} from "redux"
import combineReducers from "redux"
import { todoReducer } from "./Todo/reducer"
import { countReducer } from "./Counter/reducer"
// const rootReducer = combineReducers({
//     count : countReducer,
//     todos : todoReducer,
// });
export const store = createStore(todoReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
