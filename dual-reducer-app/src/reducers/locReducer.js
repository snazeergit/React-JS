import { locInit } from "../util/init";

export const locReducer=(state=locInit,action)=>{
    if(action.type=="LOC"){
        state={
            ...state, loc:action.payload
        }
    }
return state;
}