import { init } from "./init";

export const myReducer = (state = init, action) => {
    switch (action.type) {
        case 'AUTH':
            state = {
                ...state,
                isLoggedIn: action.payload
            }
            break;
    }
    return state;
}