import React from 'react'
import { myStore } from '../src/store'
export const B = () => {
    const locationRef = React.useRef()

    const fnLocation = () => {
        let location = locationRef.current.value
        myStore.dispatch({
            type: 'LOCATION_REDUCER',
            payload: location
        })
    }
    
    return (
        <div>
            <h1>B : <input ref={locationRef} /></h1>
            <button onClick={fnLocation}>Submit</button>
        </div>
    )
}