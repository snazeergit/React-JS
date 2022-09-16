import { locInit } from '../init'
export const locReducer = (state = locInit, action) => {
    if (action.type === 'LOC_REDUCER') {
        state = {
            ...state,
            loc: action.payload
        }
    }
    return state
}