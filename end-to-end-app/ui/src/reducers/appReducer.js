import { init } from '../utils/init'

//create reducer
export const appReducer = (state = init, action) => {
    switch (action.type) {
        case 'LOADER':
            state = {
                ...state, isShowLoader: action.payload
            }
            break;
        case 'AUTH':
            state = {
                ...state, isLoggedIn: action.payload
            }
            break;
    }
    return state;
}