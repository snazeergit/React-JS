import { init } from "../util/init";
export const myReducer = (state=init, action) => {
    if (action.type == 'NAME') {
        state = {
            ...state, name: action.payload
        }
    }
    return state;
}