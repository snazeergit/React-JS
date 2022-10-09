import React from 'react'
import './Modal.css'
export const Modal = (props) => {
    const {text,handModalResponse}=props
  return (
    <div className='app-modal'>
        <div className='mask'></div>
        <div className='content py-3'>
            <h2>{text}</h2>
            <p className='text-end'>
                <button onClick={()=>handModalResponse(true)}  className='btn btn-primary me-3'>Ok</button>
                <button onClick={()=>handModalResponse(false)}className='btn btn-primary me-3'>Cancel</button>
            </p>
        </div>
    </div>
  )
}
