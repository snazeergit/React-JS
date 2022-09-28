import { initLoc } from "../utils/init";

export const locReducer = (state = initLoc, action) => {
    if (action.type === 'LOC_REDUCER') {
        state = { ...state, loc: action.payload }
    }
    return state;
}