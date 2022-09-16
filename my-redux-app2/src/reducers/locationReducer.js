import { locationInit } from "../utils/init";

export const locationReducer = (state = locationInit, action) => {
    if (action.type === 'LOCATION_REDUCER') {
        state = { ...state, location: action.payload }
    }
    return state
}