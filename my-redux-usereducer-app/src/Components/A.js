import React from 'react'
import { ctx } from '../context'

export const A = () => {
    const nameRef = React.useRef()
    const ctxData = React.useContext(ctx)
    const fnChName = () => {
        const name = nameRef.current.value
        ctxData.dispatch({
            type: 'NAME',
            payload: name
        }
        )
    }
    return (
        <div><h1>A : </h1>
            <h3>
                Name : <input ref={nameRef} />
            </h3>
            <button onClick={fnChName}>PassData</button>
        </div>
    )
}
