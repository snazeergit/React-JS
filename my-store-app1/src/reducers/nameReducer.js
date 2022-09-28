import { initName } from "../utils/init";

export const nameReducer = (state = initName, action) => {
    if (action.type === 'NAME_REDUCER') {
        state = { ...state, name: action.payload }
    }
    return state;
}