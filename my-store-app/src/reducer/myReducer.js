import { init } from "../utils/init";

export const myReducer=(state=init, action)=>{
    state={...state, name:action.payload}
    return state;
}