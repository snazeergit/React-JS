export const appReducer = (state, action) => {
    console.log('Prev state::', state)
    console.log('action ::', action)
    switch (action.type) {
        case "NAME":
            state = {
                ...state, name: action.payload
            }
            break;
        case "LOC":
            state = {
                ...state, loc: action.payload
            }
            break;
    }
    console.log('New State:: ', state)
    return state;
}