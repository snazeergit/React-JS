//reducer function
import {init} from './init'

//state is initialized with initData from init.js and action is updated with the data from the A comp text box
export const myReducer=(state=init, action)=>{
    //merging state with the action (data entered from A comp textbox)
    state={...state, name:action.payload}
    return state
}

/*
initData={
    name:''
}

currentData={
    type:''
    name:'nazeer'
}

resultData1={
    ...initData,
    ...currentData
}

'...' spread operator will 

Output:
-------
{
    name:'nazeer'
    type:''
}

resultData2={
    ...initData,
    name:currentData.name
}

Output:
-------
{
    name:'nazeer'
}

*/