import React, { createRef, useReducer } from 'react'

export const StateMgmtAtComp = () => {

    const init = {
        name: 'Sachin',
        loc: 'Mumbai'
    }

    /*
    const [name, setName] = React.useState(init.name)
    const [loc, setLoc] = React.useState(init.loc)
    */

    let nameRef = React.useRef()
    let locRef = React.useRef()

    const fnChName = () => {
        let n = nameRef.current.value
        dispatch({
            type: "NAME",
            payload: n
        })
    }

    const fnChLoc = () => {
        let l = locRef.current.value
        dispatch({
            type: "LOC",
            payload: l
        })
    }

    const myReducer = ((state, action) => {
        console.log('Previous State::', state)
        console.log('Action ::', action)

        if (action.type == "NAME") {
            state = { ...state, name: action.payload }
        }
        if (action.type == "LOC") {
            state = { ...state, loc: action.payload }
        }
        console.log('New State::', state)

        return state;
    })

    const [state, dispatch] = useReducer(myReducer, init)

    return (
        <div>
            <h1>State Management at Component Level</h1>
            <h3>
                Name : <input ref={nameRef} />
            </h3>
            <button onClick={fnChName}>ChaneName</button>
            <h3>
                Location : <input ref={locRef} />
            </h3>
            <button onClick={fnChLoc}>ChangeLocation</button>

            <h3> My name is <u>{state.name}</u> and I'm from <u>{state.loc}</u> .</h3>
        </div>
    )
}