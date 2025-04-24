import { createStore } from "redux";

const accountState = {
    name:"",
    mobilenumber:"",
    amount:0     
}

function accountReducer(state=accountState,action){
    switch(action.type){
       case "NAME":
            return {...state,name:action.payload}
       case "PHONE":
            return {...state,mobilenumber:action.payload}
       case "DEP":
            return {...state, amount:state.amount+action.payload}
       case "WIT":
            return {...state, amount:state.amount - +action.payload}
       default:
        return state; 

    }
}
// const rootReducer = combineReducers({
//     user: userReducer,
//     posts: postsReducer,
// });

let store = createStore(accountReducer);
export default store;