import React from 'react'
import { ctx } from '../context'

export const B = () => {
    const locRef = React.useRef()
    const ctxData = React.useContext(ctx)
    const fnChLoc = () => {
        const loc = locRef.current.value
        ctxData.dispatch({
            type: "LOC",
            payload: loc
        })
    }
    return (
        <div>
            <h1>B : </h1>
            <h3>
                Location : <input ref={locRef} />
            </h3>
            <button onClick={fnChLoc}>PassData</button>
        </div>
    )
}
