import { nameInit } from '../init'
export const nameReducer = (state = nameInit, action) => {
    if (action.type === 'NAME_REDUCER') {
        state = {...state, name: action.payload }
    }
    return state
}