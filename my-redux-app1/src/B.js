import React from 'react'
import './B.css'
import {store} from './store'

export const B = () => {
    const locRef=React.useRef()
    const fnLoc = () => {
        let loc = locRef.current.value
        store.dispatch({
          type: 'LOC_REDUCER',
          payload: loc
        })
      }
  return (
    <div className='B'>
        <h1>B: <input ref={locRef}/></h1>
        <button onClick={fnLoc}>Submit</button>
    </div>
  )
}
