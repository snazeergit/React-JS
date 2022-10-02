import { nameInit } from "../util/init";

export const nameReducer=(state=nameInit,action)=>{
    if(action.type=="NAME"){
        state={
            ...state, name:action.payload
        }
    }
return state;
}