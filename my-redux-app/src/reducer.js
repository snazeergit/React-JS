//reducer function
import {initData} from './init'

//currentData is initialized with initData from init.js and newData is updated with the data from the A comp text box
export const myReducer=(currentData=initData, newData)=>{
    //merging current data with the newData (data entered from A comp textbox)
    currentData={...currentData, name:newData.name}
    return currentData
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