import { mobileInit } from "../utils/init";

export const mobileReducer = (state = mobileInit, action) => {
    if (action.type === 'MOBILE_REDUCER') {
        state = { ...state, mobile: action.payload }
    }
    return state
}