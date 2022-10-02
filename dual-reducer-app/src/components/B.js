import React from 'react'
import { appStore } from '../store/appStore'

export const B = () => {
    const locRef = React.useRef()

    const fnLoc = () => {
        const loc = locRef.current.value
        appStore.dispatch({
            type: "LOC",
            payload: loc
        })
    }

    return (
        <div>
            <h1>B : </h1>
            <p>Location : <input ref={locRef} /></p>
            <button onClick={fnLoc}>submit</button>
        </div>
    )
}
